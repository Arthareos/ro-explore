import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Destination } from '../interfaces/destination';

@Injectable({
  providedIn: 'root'
})
export class ExploreDestinationService {
  readonly ROOT_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.ROOT_URL + '/destinations');
  }

  getDestination(id: string): Observable<Destination> {
    return this.http.get<Destination>(this.ROOT_URL + '/destinations/' + id);
  }
}
