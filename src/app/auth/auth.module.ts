import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth.routing";

@NgModule({
  imports: [CommonModule, AuthRoutingModule,HttpClientModule],
  declarations: [AuthComponent, LoginComponent, RegistrationComponent]
})
export class AuthModule {}
