import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule, HttpClientXsrfModule, HttpParams } from '@angular/common/http';
import { FormControl, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { ChartModule } from "angular-highcharts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChartsComponent } from "./charts/charts.component";
import { ChartDataService } from "../app/common/services/chart-data.service"

@NgModule({
  declarations: [AppComponent, ChartsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ChartModule
  ],
  providers: [
    ChartDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
