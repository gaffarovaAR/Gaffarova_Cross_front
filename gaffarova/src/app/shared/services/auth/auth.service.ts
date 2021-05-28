import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SRV_URL } from 'src/app/config';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  login(user: {Login: string, Password: string}): Observable<{access_token: string, username: string, role: string}> {
    
    return this.http.post<{access_token: string, username: string, role: string}>(`${SRV_URL}/token`, user)
      .pipe(
        tap(
          ({access_token, username, role}) => {
            localStorage.setItem('auth-token', access_token)
            localStorage.setItem('role', role)
            localStorage.setItem('name', username)
          }
        )
      )
  }

  setToken(token: string) {
    localStorage.setItem('auth-token', token)
  }

  getToken(): string {
    return localStorage.getItem('auth-token')
  }

  setName(name: string) {
    localStorage.setItem('name', name)
  }

  getName(): string {
    return localStorage.getItem('name')
  }


  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth-token')
  }

  logout() {
    this.setToken(null)
    this.setRole(null)
    this.setName(null)
    localStorage.clear()
  }

  setRole(role: string) {
    localStorage.setItem('role', role)
  }

  getRole(): string {
    return localStorage.getItem('role')
  }

  constructor(private http: HttpClient) { }
}
