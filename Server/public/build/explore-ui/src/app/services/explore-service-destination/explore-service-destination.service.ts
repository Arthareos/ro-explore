import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Destination } from '../interfaces/destination';
import { getAllDestination } from '../interfaces/getAllDestinations';
import { environment } from './../../../environments/environment.prod';

@Injectable({providedIn: 'root'})
export class ExploreDestinationService {
  constructor(private http: HttpClient) {}

  getDestinations(): Observable<getAllDestination> {
    return this.http.get<getAllDestination>(`${environment.apiUrl}/destinations`);
  }

  getDestination(id: string): Observable<Destination> {
    return this.http.get<Destination>(`${environment.apiUrl}/destinations/${id}`);
  }
}
