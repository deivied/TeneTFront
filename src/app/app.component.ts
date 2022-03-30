import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { IUser } from './shared/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isLoggedIn!: boolean;
  showAdminBoard!: string;
  title = 'TenetNgMaterial';
  user!:IUser;

  constructor(private authInf: AuthService){

  }

  ngOnInit(): void {

  }
}
