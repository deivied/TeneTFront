import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUser } from './user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject$: BehaviorSubject<IUser>;
  public currentUser$: Observable<IUser>;

  private tokenUserSubject$: BehaviorSubject<IUser>;
  public tokenUser$: Observable<IUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject$ = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser$ = this.currentUserSubject$.asObservable();

    this.tokenUserSubject$ = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('tokenUser') as string));
    this.tokenUser$ = this.currentUserSubject$.asObservable();
  }

  public get currentUserValue(): IUser {
    return this.currentUserSubject$.value;
  }

  public get tokenUserValue(): IUser {
    return this.tokenUserSubject$.value;
  }


  login(email: string, password: string, profil: string) {
    return this.http.post<any>(`${environment.BASE_API_URI}/signIn`, { email, password, profil })
      .pipe(
        map(response => {
          if (response.status === 'success') {
            localStorage.setItem('currentUser', JSON.stringify(response.payload.user));
            localStorage.setItem('tokenUser', JSON.stringify(response.payload.token));
            this.currentUserSubject$.next(response.payload.user);
            this.tokenUserSubject$.next(response.payload.token)
            return response.payload.user;
          }
        }));
      }
    }

    // _user = { ...response.payload.user };
    // _user.token = response.payload.token;
    // // login successful if there's a jwt token in the response
    // if (_user && _user.token) {
    //   // store user details and jwt token in local storage to keep user logged in between page refreshes
    //   localStorage.setItem('currentUser', JSON.stringify(_user));
    //   this.currentUserSubject$.next(_user);
    // }
