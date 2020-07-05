import { Component } from "@angular/core";

@Component({
  selector: "app-create-campagin",
  templateUrl: "./create-campagin.component.html",
  styleUrls: ["./create-campagin.component.scss"],
})
export class CreateCampaginComponent {
  constructor() {}

  showMainContent: boolean = true;

  ShowHideButton(event: boolean) {
    this.showMainContent = !this.showMainContent;
  }

  values = "";

  onKey(event: any) {
    // without type info
    this.values += event.target.value + "  ";
  }

  onEnter(value: string) {
    this.values = "#" + value;
  }

  showRec: boolean = false;

  deleteRecp() {
    this.showRec = !this.showRec;
  }
  addRecp() {
    this.showRec = this.showRec ? true : true;
  }
}
