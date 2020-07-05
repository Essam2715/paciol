import { Component } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.scss"],
})
export class CalculatorComponent {
  result: string = "";
  longButtons: string[] = ["X", "RESO", "-", "SUB", "%+", "TOT", "%-"];
  arithmetic: string[] = ["+", "-", "*", "%", "295"];
  buttons: string[] = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",

    "1",
    "2",
    "3",

    "0",
    "00",
    ".",
  ];
  private prevValue: string = "";
  private curValue: string = "";
  addToExp(value: string) {
    if (this.result != "") {
      this.prevValue = this.curValue;
      this.curValue = value;
    }
    if (value == "RESO") {
      this.result = "";
    } else if (value == "X") {
      this.result =
        this.prevValue != "=" ? this.result.slice(0, -1) : this.result;
    } else if (value == "TOT") {
      this.result = eval(this.result);
    } else {
      this.result += value;
    }
  }
}
