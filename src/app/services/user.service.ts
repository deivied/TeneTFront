import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { IUser } from '../shared/user/user.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(user:IUser):Observable<any>{
    return this.http.post(`${environment.API_SERVER}/signUp`,user) as Observable<any>;
  }

  login(auth: IUser):Observable<any>{
    return this.http.post(`${environment.API_SERVER}/signIn`, auth) as Observable<any>;
  }

  profil(profil: IUser): Observable<any>{
    return this.http.post(`${environment.API_SERVER}/profilUser`, profil) as Observable<any>;
  }
}
