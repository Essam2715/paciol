import { Component } from "@angular/core";

@Component({
  selector: "app-circle-chart",
  templateUrl: "./circle-chart.component.html",
  styleUrls: ["./circle-chart.component.scss"],
})
export class CircleChartComponent {
  public chartType: string = "doughnut";

  public chartDatasets: Array<any> = [
    { data: [300, 90], label: "My First dataset" },
  ];

  public chartColors: Array<any> = [
    {
      barThickness: 9,

      backgroundColor: ["#e77e23", "#1e8ab7"],
      hoverBackgroundColor: ["#f0b887", "#1e8ab7"],
      borderWidth: 0,
    },
  ];
  public chartLabels: Array<any> = [" Created  ", "Completed "];

  public chartOptions: any = {
    // responsive: true,
    cutoutPercentage: 90,
    
    legend: {
      labels: {
        boxWidth: 0,
        padding: 0,
        enabled: false,
        fontColor: "#fafbfb",
      },
    },
    tooltips: {
      bodyFontSize: 15,
    },
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
