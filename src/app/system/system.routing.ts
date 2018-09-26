import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SystemComponent } from "./system.component";
import { FirstPageComponent } from "./first-page/first-page.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: "",
    component: SystemComponent,
    children: [
      { path: "books", component: FirstPageComponent },
      { path: "about", component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
