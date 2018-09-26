import { Component, OnInit } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AddBooksComponent } from "./dialogs/add-books/add-books.component";
import { BooksService } from "./services/books.service";

@Component({
  selector: "app-first-page",
  templateUrl: "./first-page.component.html",
  styleUrls: ["./first-page.component.scss"]
})
export class FirstPageComponent implements OnInit {
  constructor(public dialog: MatDialog, private bookService: BooksService) {}

  addBooks() {
    const dialogRef = this.dialog.open(AddBooksComponent, {});
    dialogRef.afterClosed().subscribe(() => {
      this.bookService.getBooks().subscribe((books: any) => {
        // this.bookService.books.push({
        //   Title: books.Title,
        //   Author: books.Author,
        //   Description: books.Description
        // });
        this.bookService.books = books;
      });
    });
  }

  ngOnInit() {}
}
