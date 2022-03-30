import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUser } from '../shared/user/user.model';
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


  // login(email: string, password: string, profil: string): Observable<any> {
  //   return this.http.post<any>(`${environment.BASE_API_URI}/signIn`, { email, password, profil })
  //     .pipe(
  //       map(response => {
  localStore(response: any) {
    localStorage.setItem('currentUser', JSON.stringify(response.payload.user));
    localStorage.setItem('tokenUser', JSON.stringify(response.payload.token));
    this.currentUserSubject$.next(response.payload.user);
    this.tokenUserSubject$.next(response.payload.token)
    return response.payload.user;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('tokenUser');
    this.currentUserSubject$.next({} as IUser);
    //document.location.reload(true);
  }
}
