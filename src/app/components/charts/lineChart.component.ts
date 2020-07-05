import { Component } from "@angular/core";

@Component({
  selector: "line-chart",
  templateUrl: "./lineChart.component.html",
  styleUrls: ["./lineChart.component.scss"],
})
export class LineChartComponent {
  public chartType: string = "line";

  public chartDatasets: Array<any> = [
    { data: [35, 20, 30, 50, 40], label: "My Second dataset" },
  ];

  public chartLabels: Array<any> = ["10am", "12am", "3am", "5am", "7am"];

  public chartColors: Array<any> = [
    {
      backgroundColor: "#cceaf9",
      borderColor: "#2292bf",
      borderWidth: 2,
    },
  ];

  public chartOptions: any = {
    responsive: true,
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
