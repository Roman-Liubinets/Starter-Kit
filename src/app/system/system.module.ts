import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SystemComponent } from "./system.component";
import { FirstPageComponent } from './first-page/first-page.component';
import { SystemRoutingModule } from "./system.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SystemRoutingModule
  ],
  declarations: [SystemComponent, FirstPageComponent]
})
export class SystemModule {}
