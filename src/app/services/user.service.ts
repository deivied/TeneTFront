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
    return this.http.post(`${environment.BASE_API_URI}/signUp`,user) as Observable<any>;
  }

  login(auth: IUser):Observable<any>{
    return this.http.post(`${environment.BASE_API_URI}/signIn`, auth) as Observable<any>;
  }

  profil(profil: IUser): Observable<any>{
    return this.http.post(`${environment.BASE_API_URI}/profilUser`, profil) as Observable<any>;
  }
}
