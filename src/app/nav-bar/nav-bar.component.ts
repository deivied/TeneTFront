import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/user/user.model';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user!: IUser;
  isGranted!: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
  }

  onSignUp() {
    this.router.navigateByUrl('signUp');
  }

  onSignIn(){
    this.router.navigateByUrl('signIn')
  }

  logOut(){
    this.authService.logout()
    this.router.navigateByUrl('')
    this.isGranted = false;
  }
}
