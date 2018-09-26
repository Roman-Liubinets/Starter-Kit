import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { BooksService } from "../../services/books.service";

@Component({
  selector: "app-edite-book",
  templateUrl: "./edite-book.component.html",
  styleUrls: ["./edite-book.component.scss"]
})
export class EditeBookComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditeBookComponent>,
    public dialog: MatDialog,
    private bookService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  book = {
    Title: this.data.Title,
    Author: this.data.Author,
    Description: this.data.Description
  };

  editeBook(title, author, description) {
    console.log("editeBook", title, author, description);
    const updatedBook = {
      _id: this.data._id,
      Title: title,
      Author: author,
      Description: description
    };
    console.log("updatedBook", updatedBook);
    this.bookService.editeBook(updatedBook).subscribe((result: any) => {
      console.log("result", result);
    });
  }

  ngOnInit() {
    console.log(this.data);
  }
}
