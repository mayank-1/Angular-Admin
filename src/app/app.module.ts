import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { LeadsComponent } from './leads/leads.component';
import { SalesInProgressComponent } from './sales-in-progress/sales-in-progress.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbaordComponent,
    EnquiriesComponent,
    LeadsComponent,
    SalesInProgressComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
