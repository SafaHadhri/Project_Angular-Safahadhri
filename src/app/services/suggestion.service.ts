import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Suggestion } from '../models/suggestion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  url = "http://localhost:3001/suggestions/"
  constructor(private http: HttpClient) { }

  createSuggestion(suggestion: Suggestion): Observable<any>{
    return this.http.post<any>(this.url, suggestion)
  }
  readAllSuggestion(): Observable<any>{
    return this.http.get<any>(this.url)
  }
  readOneSuggestion(id: string): Observable<any>{
    return this.http.get<any>(this.url + id)
  }
  updateSuggestion(id: string, suggestion: Suggestion): Observable<any>{
    return this.http.put<any>(this.url + id, suggestion)
  }
  deleteSuggestion(id: string): Observable<void>{
    return this.http.delete<void>(this.url + id)
  }
}
