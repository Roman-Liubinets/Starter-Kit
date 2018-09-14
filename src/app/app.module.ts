import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/services/auth.service";
// import { SystemComponent } from './system/system.component';

@NgModule({
  declarations: [
    AppComponent,
    // SystemComponent
    // AuthComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
