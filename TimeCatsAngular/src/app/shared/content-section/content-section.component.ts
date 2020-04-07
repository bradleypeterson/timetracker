import { Component, Input, Output, EventEmitter } from "@angular/core";
import { animate, style, transition, trigger, state } from "@angular/animations";
import {ContentSectionButton} from "./content-section-button";

@Component({
  selector: "app-content-section",
  templateUrl: "./content-section.component.html",
  styleUrls: ["./content-section.component.scss"],
  animations: [
    trigger("chevronState", [
      state("closed", style({
        transform: "translateY(-1px) rotate(0deg)"
      })),
      state("open", style({
        transform: "translateY(2px) rotate(180deg)"
      })),
      transition("open <=> closed", animate("250ms ease-out"))
    ]),
    trigger("state", [
      state("closed", style({
        height: "0px",
        "padding-top": "0px",
        "padding-bottom": "0px"
      })),
      state("open", style({
        height: "*",
        "padding-top": "24px",
        "padding-bottom": "24px"
      })),
      transition("closed => open", [
        style({
          height: "0px",
          "padding-top": "0px",
          "padding-bottom": "0px"
        }),
        animate("250ms ease-out", style({
          height: "*",
          "padding-top": "24px",
          "padding-bottom": "24px"
        }))
      ]),
      transition("open => closed", [
        style({
          height: "*",
          "padding-top": "24px",
          "padding-bottom": "24px"
        }),
        animate("250ms ease-out", style({
          height: "0px",
          "padding-top": "0px",
          "padding-bottom": "0px"
        }))
      ])
    ])
  ]
})
export class ContentSectionComponent {
  @Input() title = "Title";
  @Input() collapsible = false;
  @Input() state: "open" | "closed" = "open";
  @Input() locked = false;
  @Input() hasButtons = false;
  @Input() compact = false;
  @Input() svgIcon: string = null;

  @Output() stateChange = new EventEmitter<string>();

  private Buttons = new Array<ContentSectionButton>();
  @Input()
  set buttons(buttons: Array<ContentSectionButton>) {
    if (buttons == null) { return; }
    this.Buttons = buttons;
  }
  get buttons(): Array<ContentSectionButton> {
    return this.hasButtons ? this.Buttons : new Array<ContentSectionButton>();
  }

  public toggleState(): void {
    this.state = this.state === "open" ? "closed" : "open";
    this.stateChange.emit(this.state);
  }

  public isCollapsible(): boolean {
    return this.collapsible;
  }

  public click(btn: ContentSectionButton, event: MouseEvent): void {
    if (btn.click) {
      btn.click(event);
    }
  }
}
