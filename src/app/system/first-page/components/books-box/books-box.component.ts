import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BooksService } from "../../services/books.service";
import { Books } from "../../models/books.model";
import { DeleteBooksComponent } from "../../dialogs/delete-books/delete-books.component";
import { EditeBookComponent } from "../../dialogs/edite-book/edite-book.component";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  group
} from "@angular/animations";

@Component({
  selector: "app-books-box",
  templateUrl: "./books-box.component.html",
  styleUrls: ["./books-box.component.scss"],
  animations: [
    trigger("addAnimation", [
      transition(":enter", [
        style({ transform: "translateX(-100%" }),
        animate(350)
      ]),
      transition(":leave", [
        group([
          animate(
            "0.2s ease",
            style({
              transform: "translateX(100%)"
            })
          ),
          animate(
            "0.5s 0.2s ease",
            style({
              opacity: 0
            })
          )
        ])
      ])
    ])
  ]
})
export class BooksBoxComponent implements OnInit {
  constructor(public bookService: BooksService, public dialog: MatDialog) {}

  getBooks() {
    return this.bookService.getBooks().subscribe((books: any) => {
      this.bookService.books = books;
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

  deleteElement(book) {
    // window.setTimeout(() => {
    this.bookService.deleteBook(book._id).subscribe(() => {
      this.bookService.getBooks().subscribe((books: any) => {
        this.bookService.books = books;
      });
    });
    // }, 700);
  }

  ngOnInit() {
    this.getBooks();
  }
}
