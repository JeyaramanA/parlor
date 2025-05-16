import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../utils/interface';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  private baseUrl = 'http://localhost:8080/api/artists';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.baseUrl);
  }

  create(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.baseUrl, artist);
  }

  update(artist: Artist): Observable<Artist> {
    return this.http.put<Artist>(`${this.baseUrl}/${artist.id}`, artist);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
