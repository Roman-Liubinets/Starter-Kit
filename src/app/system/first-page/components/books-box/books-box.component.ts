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
  animate
} from "@angular/animations";

@Component({
  selector: "app-books-box",
  templateUrl: "./books-box.component.html",
  styleUrls: ["./books-box.component.scss"],
  animations: [
    trigger("deleteAnimation", [
      // transition("void => *", [
      //   style({ transform: "translateX(-100%)" }),
      //   animate("1s")
      // ]),
      transition("* => void", [
        animate(
          "1s",
          style({
            transform: "translateX(100%)"
          })
        )
      ])
    ])
  ]
})
export class BooksBoxComponent implements OnInit {
  constructor(public bookService: BooksService, public dialog: MatDialog) {}

  showElement: boolean = true;

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
      this.showElement = this.showElement ? false : true;
      this.bookService.getBooks().subscribe((books: any) => {
        this.bookService.books = books;
      });
    });
  }

  deleteElement() {
    this.showElement = this.showElement ? false : true;
    console.log("this.showElement", this.showElement);
  }

  ngOnInit() {
    this.getBooks();
  }
}
