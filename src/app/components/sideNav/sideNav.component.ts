import { Component, AfterViewInit, ViewChildren } from "@angular/core";
import { CollapseComponent } from "angular-bootstrap-md";

@Component({
  selector: "side-nav",
  templateUrl: "./sideNav.component.html",
  styleUrls: ["./sideNav.component.scss"],
})
export class SideNav implements AfterViewInit {
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.toggle();
      });
    });
  }
}
