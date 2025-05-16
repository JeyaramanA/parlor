import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { authToken, AuthURLResponse } from '../utils/interface';
import URLs from '../utils/URLs';

@Injectable()
export class AuthService {
  private http = inject(HttpClient);
  login(
    username: string,
    password: string
  ): Observable<AuthURLResponse<authToken>> {
    const payload = { username, password };
    return this.http.post<AuthURLResponse<authToken>>(URLs.Login_AuthApi, payload);
  }
}
