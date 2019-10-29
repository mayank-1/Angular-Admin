import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashbaordComponent } from "./dashbaord/dashbaord.component";
import { EnquiriesComponent } from "./enquiries/enquiries.component";
import { LeadsComponent } from "./leads/leads.component";
import { SalesInProgressComponent } from "./sales-in-progress/sales-in-progress.component";
import { ReportsComponent } from "./reports/reports.component";

const routes: Routes = [
  { path: "", component: DashbaordComponent },
  { path: "enquiries", component: EnquiriesComponent },
  { path: "leads", component: LeadsComponent },
  { path: "sales", component: SalesInProgressComponent },
  { path: "reports", component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
