import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
// import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent
    // AuthComponent
  ],
  imports: [BrowserModule, FormsModule,AppRoutingModule, AuthModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
