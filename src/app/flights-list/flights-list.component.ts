import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Flight } from './flight.model'

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights: Array<any>;
  detailFlight: Flight;
  detailClass = 'disabled';

  constructor(private flightService : FlightService) { }

  ngOnInit() {
    this.listFlights();
    this.detailFlight= {id: 0, departureTime: '', arrivalTime: '', status: '', pilot: '', aircraft: '', departureCity: '', arrivalCity: ''};
  }

  listFlights(){
    this.flightService.list().subscribe(data => this.flights = data);
  }

  details(flightId){
    for(var i=0; i<this.flights.length; i++){
      if (this.flights[i].id === flightId){
        this.detailFlight = this.flights[i];   
        this.detailClass = '';   
      }
    }
  }

  closeDetails(){
    this.detailClass = 'disabled';
  }

}
