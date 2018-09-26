import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BooksService } from "../../services/books.service";
import { Books } from "../../models/books.model";
import { DeleteBooksComponent } from "../../dialogs/delete-books/delete-books.component";
import { EditeBookComponent } from "../../dialogs/edite-book/edite-book.component";

@Component({
  selector: "app-books-box",
  templateUrl: "./books-box.component.html",
  styleUrls: ["./books-box.component.scss"]
})
export class BooksBoxComponent implements OnInit {
  constructor(public bookService: BooksService, public dialog: MatDialog) {}

  getBooks() {
    return this.bookService.getBooks().subscribe((books: any) => {
      this.bookService.books = books;
      console.log(
        "TCL: BooksBoxComponent -> getBooks -> this.bookService.books",
        this.bookService.books
      );
    });
  }

  openRemoveDialog(book) {
    const dialogRef = this.dialog.open(DeleteBooksComponent, {
      data: book
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.bookService.getBooks().subscribe((books: any) => {
        this.bookService.books = books;
      });
    });
  }

  openEditDialog(book) {
    const dialogRef = this.dialog.open(EditeBookComponent, {
      data: book
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.bookService.getBooks().subscribe((books: any) => {
        this.bookService.books = books;
      });
    });
  }

  ngOnInit() {
    this.getBooks();
  }
}
