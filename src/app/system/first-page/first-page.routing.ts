import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstPageComponent } from "./first-page.component";
import { FirstPageModule } from "./first-page.module";

const routes: Routes = [
  { path: "", component: FirstPageComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
