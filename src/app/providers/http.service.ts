import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private headers = {
    'X-Requested-With': '',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, PATCH, DELETE',
  };

  constructor(
    private http: HttpClient,
    private tokenSvc: TokenService,
    private router: Router
  ) {}

  private getHeaders(url: string): HttpHeaders {
    let accessToken: string | null = null;
    try {
      accessToken = this.tokenSvc.getAccessToken();
    } catch {
      this.router.navigate(['/login']);
      this.tokenSvc.removeAccessToken();
    }

    if (accessToken) {
      return new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
        ...this.headers,
      });
    }
    return new HttpHeaders({
      ...this.headers,
    });
  }

  public get<T>(
    url: string,
    params?: Record<string, string | number>
  ): Observable<T> {
    const options = {
      headers: this.getHeaders(url),
      params: new HttpParams({ fromObject: params }),
      withCredentials: false,
    };
    return this.http.get<T>(url, options);
  }

  public post<TPayload, TResponse>(url: string, data?:TPayload): Observable<TResponse> {
    const options = {
      headers: this.getHeaders(url),
      withCredentials: false,
    };
    return this.http.post<TResponse>(url, data, options);
  }

  public put<T>(url: string, data?:T): Observable<T> {
    const options = {
      headers: this.getHeaders(url),
      withCredentials: false,
    };
    return this.http.put<T>(url, data, options);
  }

  public patch<TPayload, TResponse>(url: string, data?:TPayload): Observable<TResponse> {
    const options = {
      headers: this.getHeaders(url),
      withCredentials: false,
    };
    return this.http.patch<TResponse>(url, data, options);
  }

  public delete<T>(url: string, data?: Record<string, unknown>): Observable<T> {
    const options = {
      headers: this.getHeaders(url),
      body: data,
      withCredentials: false,
    };
    return this.http.delete<T>(url, options);
  }
}
