import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BooksService } from "../../services/books.service";
import { Books } from "../../models/books.model";

@Component({
  selector: "app-books-box",
  templateUrl: "./books-box.component.html",
  styleUrls: ["./books-box.component.scss"]
})
export class BooksBoxComponent implements OnInit {
  constructor(private bookService: BooksService) {}


  getBooks() {
    return this.bookService.getBooks().subscribe((books: any) => {
      books.forEach(book => {
        this.bookService.books.push({
          Title: book.Title,
          Author: book.Author,
          Description: book.Description
        });
      });
      // console.log("this.books", this.books);
    });
  }

  ngOnInit() {
    this.getBooks();
  }
}
