import {Component, Input, OnInit} from "@angular/core";
import {DataSource, SelectionModel} from "@angular/cdk/collections";
import {BehaviorSubject} from "rxjs";
import {Course} from "../../../course";
import {MatTableDataSource} from "@angular/material/table";
import {CdkTableModule} from "@angular/cdk/table";

@Component({
  selector: "app-select-table",
  templateUrl: "./select-table.component.html",
  styleUrls: ["./select-table.component.scss"]
})
export class SelectTableComponent<T> implements OnInit {
  @Input() allowMultiSelect = false;
  @Input() initialSelection = [];
  @Input() displayedColumns: string[];
  @Input() dataSource: BehaviorSubject<T[]>;

  selection = new SelectionModel<Course>(this.allowMultiSelect, this.initialSelection);

  constructor() { }

  ngOnInit(): void { }
}
