import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IUser } from '../shared/user/user.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user!: IUser;


  constructor(
    private authInf: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authInf.currentUserValue;
  }

  onSubmitProfil(form: NgForm){
  }

}
