import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";

@Component({
  selector: "app-add-books",
  templateUrl: "./add-books.component.html",
  styleUrls: ["./add-books.component.scss"]
})
export class AddBooksComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddBooksComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
}
