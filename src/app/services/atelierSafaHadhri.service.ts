import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AtelierSafaHadhri } from '../models/atelierSafaHadhri';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtelierSafaHadhriService {
  url = "http://localhost:3001/ateliers/";

  constructor(private http: HttpClient) { }

  createAtelier(atelier: AtelierSafaHadhri): Observable<any> {
    return this.http.post<any>(this.url, atelier);
  }

  readAllAteliers(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  readOneAtelier(id: string): Observable<any> {
    return this.http.get<any>(this.url + id);
  }

  updateAtelier(id: string, atelier: AtelierSafaHadhri): Observable<any> {
    return this.http.put<any>(this.url + id, atelier);
  }

  deleteAtelier(id: string): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }
}
