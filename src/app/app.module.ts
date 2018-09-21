import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
// import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/services/auth.service";
import { BooksService } from "./system/first-page/services/books.service";

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
    // MatDialogModule,
    BrowserAnimationsModule,
    // MaterialModule
    NgbModule.forRoot()
  ],
  providers: [AuthService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
