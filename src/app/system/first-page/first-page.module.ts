import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { MatDialogModule } from "@angular/material";
import { BooksBoxComponent } from "./components/books-box/books-box.component";
import { AddBooksComponent } from "./dialogs/add-books/add-books.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    MatDialogModule
  ],
  declarations: [BooksBoxComponent, AddBooksComponent]
})
export class FirstPageModule {}
