import { Component, OnInit } from "@angular/core";
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddDialogComponent } from "../dialogs/add-dialog/add-dialog.component";

@Component({
  selector: "app-first-page",
  templateUrl: "./first-page.component.html",
  styleUrls: ["./first-page.component.scss"]
})
export class FirstPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  addBooks() {
    const dialogRef = this.dialog.open(AddDialogComponent, {});
  }

  ngOnInit() {}
}
