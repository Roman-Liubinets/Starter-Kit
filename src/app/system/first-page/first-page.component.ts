import { Component, OnInit } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AddBooksComponent } from "./dialogs/add-books/add-books.component";
import { BooksService } from "./services/books.service";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-first-page",
  templateUrl: "./first-page.component.html",
  styleUrls: ["./first-page.component.scss"],
  animations: [
    trigger("handleTransition", [
      state(
        "void",
        style({
          position: "fixed",
          top: "5%",
          left: "-150%",
          width: "100%",
          opacity: 0
        })
      ),
      state("*", style({ position: "fixed", top: "5%", width: "100%" })),
      transition(
        ":enter",
        animate(
          "1s ease-out",
          style({ transform: "translateX(150%)", opacity: 1 })
        )
      ),
      transition(
        ":leave",
        animate(
          "1s ease-out",
          style({ transform: "translateX(150%)", opacity: 0 })
        )
      )
    ])
  ],
  host: { "[@handleTransition]": "" }
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
