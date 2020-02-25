import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SelectTableComponent} from "./select-table/select-table.component";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [SelectTableComponent],
  exports: [
    SelectTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class SharedModule {
}
