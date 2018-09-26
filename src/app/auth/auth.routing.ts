import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

const appRoutes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "registration", component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
