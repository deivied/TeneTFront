import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  isLoading: boolean = false;
  successMsg?: string;
  errorMsg?: string;
  formSignIn!: FormGroup;



  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
    private route$:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onInit();
  }

  onInit(){
    this.formSignIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      profil: ['', Validators.required]
    });
  }
  onSignIn() {
    this.isLoading = true;
    console.log(this.formSignIn.value.email);
    this.authService.login(this.formSignIn.value.email, this.formSignIn.value.password, this.formSignIn.value.profil)
    .pipe(first())
    .subscribe(
      (data) => {
        this.isLoading = false;
        this.router.navigate(['userHome'])
      },
      (error) => {
        this.isLoading = false;
        this.errorMsg = error;
      }
    )
  }

  onClick() {
    this.router.navigateByUrl('/signUp');
  }
}

