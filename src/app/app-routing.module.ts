import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChartsComponent } from "src/app/charts/charts.component";

const routes: Routes = [{ path: "charts", component: ChartsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
