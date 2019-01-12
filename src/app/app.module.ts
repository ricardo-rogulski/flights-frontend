import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { FlightService} from './flight.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [ FlightService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
