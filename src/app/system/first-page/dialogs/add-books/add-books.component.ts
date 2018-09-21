import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { BooksService } from "../../services/books.service";
import { Books } from "../../models/books.model";

@Component({
  selector: "app-add-books",
  templateUrl: "./add-books.component.html",
  styleUrls: ["./add-books.component.scss"]
})
export class AddBooksComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddBooksComponent>,
    public dialog: MatDialog,
    private bookService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  book: Books = {
    id: "",
    Title: "",
    Author: "",
    Description: ""
  };

  addBook() {
    console.log(this.book);
    return this.bookService.addBook(this.book).subscribe((result: any) => {
      // console.log(result);
      this.dialogRef.close();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    // console.log(this.data);
  }
}
