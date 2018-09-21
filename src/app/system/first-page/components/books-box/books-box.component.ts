import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BooksService } from "../../services/books.service";
import { Books } from "../../models/books.model";
import { DeleteBooksComponent } from "../../dialogs/delete-books/delete-books.component";

@Component({
  selector: "app-books-box",
  templateUrl: "./books-box.component.html",
  styleUrls: ["./books-box.component.scss"]
})
export class BooksBoxComponent implements OnInit {
  constructor(public bookService: BooksService, public dialog: MatDialog) {}

  getBooks() {
    return this.bookService.getBooks().subscribe((books: any) => {
      books.forEach(book => {
        this.bookService.books.push({
          id: book.id,
          Title: book.Title,
          Author: book.Author,
          Description: book.Description
        });
      });
      // console.log("this.books", this.books);
    });
  }

  openRemoveDialog(book) {
    const dialogRef = this.dialog.open(DeleteBooksComponent, {
      data: book
    });
  }

  ngOnInit() {
    this.getBooks();
  }
}
