import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SelectTableComponent} from "./select-table/select-table.component";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ContentSectionComponent} from "./content-section/content-section.component";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    SelectTableComponent,
    ContentSectionComponent
  ],
  exports: [
    SelectTableComponent,
    ContentSectionComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SharedModule {
}
