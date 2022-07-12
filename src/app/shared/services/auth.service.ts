import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { UserForAuthenticationDto } from '../interfaces/requestInterfaces/otherInterfaces';
import { AccessTokenInfo, AuthenticatedUserInfo } from '../interfaces/responseInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basePath = '/';
  controllerPath = "/api/Authentication"

  constructor(private http: HttpClient) {
    this.basePath = environment.authServerUrl;
  }

  get token(): string | null {
    return localStorage.getItem('jwt');
  }

  get refreshToken(): string | null {
    return localStorage.getItem('jwt-re');
  }

  login(userForAuth: UserForAuthenticationDto): Observable<any> {
    return this.http
      .post(`${this.basePath}${this.controllerPath}/login`, userForAuth)
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  refresh(): Observable<any>{
    return this.http
      .post(`${this.basePath}${this.controllerPath}/refresh?refreshToken=` + this.refreshToken, null)
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }

  isTokenValid() {
    const expDate = new Date(this.getDataFromToken().exp * 1000);
    let curDate = new Date();
    return (expDate > curDate)
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  private setToken(response: AuthenticatedUserInfo) {
    if (!response) {
      localStorage.clear();
      return;
    }
    const token = response.accessToken;
    const refreshToken = response.refreshToken;

    localStorage.setItem('jwt', token);
    localStorage.setItem('jwt-re', refreshToken);
  }

  private handleError(error: HttpErrorResponse) {
    console.log('From handle error authservice:', error.error);
    this.logout();
    return throwError(error);
  }

  private getDataFromToken() : AccessTokenInfo {
    const tokenInfo = jwt_decode<AccessTokenInfo>(this.token as string);
    return tokenInfo;
  }
}
