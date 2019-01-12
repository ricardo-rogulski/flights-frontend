import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightsUrl = 'http://localhost:8080/flight';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<any[]>(`${this.flightsUrl}`);
  }
}
