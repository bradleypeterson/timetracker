import {Component, Input, OnInit, EventEmitter, Output} from "@angular/core";
import {SelectionModel} from "@angular/cdk/collections";
import {BehaviorSubject, Observable} from "rxjs";
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
  @Input() dataSource: T[];
  @Output() selectedItem = new EventEmitter<T>();

  public columns: string[];
  public selection: SelectionModel<T>;

  ngOnInit(): void {
    this.selection = new SelectionModel<T>(this.allowMultiSelect, this.initialSelection);

    this.columns = this.displayedColumns.slice();
    if (this.allowMultiSelect) {
      this.displayedColumns.splice(0, 0, "select");
    }
  }

  isAllSelected(): boolean {
    if (!this.selection.selected || !this.dataSource) {
      return false;
    }
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach((row) => this.selection.select(row));
  }

  checkboxAriaLabel(row?: T): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.id + 1}`;
  }

  cellClicked(row: T) {
    this.selection.toggle(row);
    this.selectedItem.emit(row);
  }
}
