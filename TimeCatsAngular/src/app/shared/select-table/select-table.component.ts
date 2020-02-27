import {Component, Input, OnInit} from "@angular/core";
import {SelectionModel} from "@angular/cdk/collections";
import {BehaviorSubject} from "rxjs";
import {Course} from "../../course";
import {Identifiable} from "../../identifiable";

@Component({
  selector: "app-select-table",
  templateUrl: "./select-table.component.html",
  styleUrls: ["./select-table.component.scss"]
})
export class SelectTableComponent<T extends Identifiable> implements OnInit {
  @Input() allowMultiSelect = false;
  @Input() initialSelection = [];
  @Input() displayedColumns: string[];
  @Input() dataSource: BehaviorSubject<T[]>;

  public columns: string[];
  public selection = new SelectionModel<T>(this.allowMultiSelect, this.initialSelection);

  constructor() {
  }

  ngOnInit(): void {
    this.columns = this.displayedColumns.slice();
    if (this.allowMultiSelect) {
      this.displayedColumns.splice(0, 0, "select");
    }
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.getValue().length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.getValue().forEach((row) => this.selection.select(row));
  }

  checkboxAriaLabel(row?: T): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.id + 1}`;
  }
}
