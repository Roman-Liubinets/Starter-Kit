import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { MatDialogModule } from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/services/auth.service";
import { BooksService } from "./system/first-page/services/books.service";
// import { SystemComponent } from './system/system.component';

@NgModule({
  declarations: [
    AppComponent
    // SystemComponent
    // AuthComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    HttpModule,
    MatDialogModule
    // MaterialModule
  ],
  providers: [AuthService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
