import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import { BooksService } from "../../services/books.service";

@Component({
  selector: "app-delete-books",
  templateUrl: "./delete-books.component.html",
  styleUrls: ["./delete-books.component.scss"]
})
export class DeleteBooksComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteBooksComponent>,
    public dialog: MatDialog,
    private bookService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
  }
}
