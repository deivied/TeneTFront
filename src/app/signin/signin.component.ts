import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  isLoading: boolean = false;
  submitted: boolean = false;
  successMsg?: string;
  errorMsg?: string;
  formSignIn!: FormGroup;



  constructor(
    private router: Router,
    private authService: UserService,
    private fb: FormBuilder,
    private http: HttpClient,
    private route$: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.onInit();
  }

  onInit() {
    this.formSignIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      profil: ['', Validators.required]
    });
  }
  onSignIn() {
    this.submitted = true;
    this.isLoading = true;
    console.log(this.formSignIn.value.email);
    this.authService
      .login(this.formSignIn.value)
      .pipe(first())
      .subscribe({
        next: res => {
          if (res.status === "success") {

            this.isLoading = false;
            this.router.navigateByUrl('/userHome')
          }
          else {
            this.isLoading = false;
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

    //   },
    //   error => {
    //     this.isLoading = false;
    //     this.errorMsg = error;
    //   }
    // )
  onClick() {
    this.router.navigateByUrl('/signUp');
  }
}

