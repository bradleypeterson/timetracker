import {Component, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
export class ContentSectionComponent implements OnInit {
  // @Input("csTitle") title = "Title";
  // @Input() collapsible: any = false;
  // @Input() state: "open" | "closed" = "open";
  // @Input() locked = false;
  // @Input() noButtons = false;
  //
  // @Output() stateChange = new EventEmitter<string>();
  //
  // public _buttons = new Array<ContentSectionButton>();
  // @Input()
  // set buttons(buttons: Array<ContentSectionButton> | ContentSectionButton) {
  //   if (buttons == null) {
  //     return;
  //   }
  //   if (buttons.constructor !== Array) {
  //     buttons = [(buttons as ContentSectionButton)];
  //   }
  //   this._buttons = (buttons as Array<ContentSectionButton>);
  // }
  // get buttons() {
  //   return this.noButtons ? new Array() : this._buttons;
  // }
  //
  // public toggleState(): void {
  //   this.state = this.state === "open" ? "closed" : "open";
  //   this.stateChange.emit(this.state);
  // }
  //
  // public isCollapsible(): boolean {
  //   return this.collapsible === true || this.collapsible === "true";
  // }
  //
  // public click(btn: ContentSectionButton, event: MouseEvent): void {
  //   if (btn.click) {
  //     btn.click(event);
  //   }
  // }

  constructor(
    // public text: string,
    // public routerLink?: string,
    // public click?: (event: MouseEvent) => void,
    // public color?: string,
    // public href?: string,
    // public disabled = false
  ) {
  }

  ngOnInit(): void {
  }

}
