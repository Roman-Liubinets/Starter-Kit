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
import { MaterialModule } from "../material.module";
import { DeleteBooksComponent } from "./first-page/dialogs/delete-books/delete-books.component";
import { EditeBookComponent } from "./first-page/dialogs/edite-book/edite-book.component";
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SystemRoutingModule,
    MaterialModule
  ],
  declarations: [
    SystemComponent,
    FirstPageComponent,
    HeaderComponent,
    BooksBoxComponent,
    AddBooksComponent,
    DeleteBooksComponent,
    EditeBookComponent,
    AboutComponent
  ],
  entryComponents: [AddBooksComponent, DeleteBooksComponent, EditeBookComponent]
})
export class SystemModule {}
