import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isLoading: boolean = false;
  errorMsg: string = '';
  successMsg: string = ''

  registerForm: FormGroup = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    numero: ['', Validators.required],
    profil: ['', Validators.required],
    password: ['', Validators.required],
    pass2: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route$: ActivatedRoute) { }

  signIn() {
    this.router.navigate(["/signIn"]);
  }
  onRegister() {
    this.isLoading = true;
    this.userService.registerUser(this.registerForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.status === "success") {
          console.log(res.message);
          this.successMsg = res.message;
          this.route$.url.subscribe(value =>
            this.router.navigate(['signIn'])
          );
        } else if (res.status === "fail") {
          console.log(res.message);
          this.errorMsg = res.message;
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error.message)
        this.errorMsg = error.message
      },
      complete: () => { }
    })
  }

}
