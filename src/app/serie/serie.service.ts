import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Serie } from './Serie';


@Injectable({
  providedIn: 'root'
  
})
export class SerieService {

constructor(private http:HttpClient) { }
  private apiUrl: string = environment.baseUrl;

  getSeries(): Observable<Serie[]> {
  return this.http.get<Serie[]>(this.apiUrl);
 }

}
