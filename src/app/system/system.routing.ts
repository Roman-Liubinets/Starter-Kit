import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SystemComponent } from "./system.component";
import { FirstPageComponent } from "./first-page/first-page.component";

const routes: Routes = [
  {
    path: "",
    component: SystemComponent,
    children: [{ path: "first", component: FirstPageComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
