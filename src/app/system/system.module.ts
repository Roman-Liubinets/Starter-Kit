import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SystemComponent } from "./system.component";
import { FirstPageComponent } from "./first-page/first-page.component";
import { SystemRoutingModule } from "./system.routing";
import { HeaderComponent } from "./components/header/header.component";
import { BooksBoxComponent } from "./first-page/components/books-box/books-box.component";
import { MatDialogModule } from "@angular/material/dialog";
import { AddBooksComponent } from "./first-page/dialogs/add-books/add-books.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SystemRoutingModule,
    MatDialogModule
  ],
  declarations: [
    SystemComponent,
    FirstPageComponent,
    HeaderComponent,
    BooksBoxComponent,
    AddBooksComponent
  ],
  entryComponents: [AddBooksComponent]
})
export class SystemModule {}
