import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthModule } from "./auth/auth.module";

const routes: Routes = [{ path: "", redirectTo: "login", pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
