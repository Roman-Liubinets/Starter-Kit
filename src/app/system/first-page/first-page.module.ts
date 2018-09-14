import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { MatDialogModule } from "@angular/material";
import { BooksBoxComponent } from "./components/books-box/books-box.component";
import { AddDialogComponent } from "../dialogs/add-dialog/add-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    MatDialogModule
  ],
  entryComponents: [AddDialogComponent],
  declarations: [BooksBoxComponent, AddDialogComponent]
})
export class FirstPageModule {}
