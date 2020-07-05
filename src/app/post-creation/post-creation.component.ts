import { Component } from "@angular/core";

@Component({
  selector: "app-post-creation",
  templateUrl:"./post-creation.component.html",
  styleUrls: ["./post-creation.component.scss"],
})
export class PostCreationComponent {
  constructor() {}

  stItalic: boolean = false;
  italicEvent() {
    this.stItalic = !this.stItalic;
  }

  stBold: boolean = false;
  boldEvent() {
    this.stBold = !this.stBold;
  }

  stAlignRight: boolean = false;
  alignRightEvent() {
    this.stAlignRight = !this.stAlignRight;
  }

  stAlignLeft: boolean = false;
  alignLeftEvent() {
    this.stAlignLeft = !this.stAlignLeft;
  }

  filterList:boolean =false;
  onKey(event: any) { // without type info.a
      this.filterList = !this.filterList;
}
}
