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
  isLoggedIn!: boolean;
  showAdminBoard!: string;
  title = 'TenetNgMaterial';

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    this.showAdminBoard = this.authService.tokenUserValue.profil;
    this.user = this.authService.currentUserValue;
    this.isLoggedIn = this.authService.currentUserValue ? this.authService.currentUserValue.isGranted : false;
  }

  onSignUp() {
    this.router.navigateByUrl('signUp');
  }

  onSignIn(){
    this.router.navigateByUrl('signIn')
  }

  onLogout(){
    this.authService.logout()
    this.router.navigateByUrl('')
    this.isLoggedIn = false;
  }

  onProfil(){
    this.router.navigateByUrl('/profil')
  }
}
