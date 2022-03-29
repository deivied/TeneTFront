import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MustMatch } from '../helpers/match-password.validator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  submitted: boolean = false;
  errorMsg: string = '';
  successMsg: string = ''
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route$: ActivatedRoute) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numero: ['', Validators.required],
      profil: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }



  signIn() {
    this.router.navigate(["/signIn"]);
  }
  onRegister() {
    this.submitted = true;
    this.isLoading = true;
    if (this.registerForm.invalid) {
      this.isLoading = false;
      return;
    } else {
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

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }

}
