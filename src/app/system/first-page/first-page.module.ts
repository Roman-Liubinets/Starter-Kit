import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../../material.module";
import { BooksBoxComponent } from "./components/books-box/books-box.component";
import { AddBooksComponent } from "./dialogs/add-books/add-books.component";
import { DeleteBooksComponent } from './dialogs/delete-books/delete-books.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    MaterialModule
  ],
  declarations: [BooksBoxComponent, AddBooksComponent, DeleteBooksComponent],
  // entryComponents: [AddBooksComponent]
})
export class FirstPageModule {}
