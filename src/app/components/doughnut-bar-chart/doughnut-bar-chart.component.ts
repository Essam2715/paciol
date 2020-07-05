import { browser } from "protractor";
import { Component } from "@angular/core";

@Component({
  selector: "doughnut-bar-chart",
  templateUrl: "./doughnut-bar-chart.component.html",
  styleUrls: ["./doughnut-bar-chart.component.scss"],
})
export class DoughnutBarChartComponent {
  public chartType: string = "bar";

  public chartDatasets: Array<any> = [
    {
      data: [
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        55,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
      ],
      label: "Completed",
    },
    {
      data: [
        55,
        69,
        90,
        41,
        86,
        95,
        30,
        45,
        79,
        85,
        71,
        66,
        65,
        80,
        95,
        40,
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        10,
      ],
      label: " Created",
    },
  ];

  public chartLabels: Array<any> = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
      ],
    },
    {
      backgroundColor: [
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
        "#e77e23",
        "#1e8ab7",
      ],
    },
  ];

  public chartOptions: any = {
    barThickness: 9,
    responsive: true,
    tooltips: {
      titleFontSize: 20,
      bodyFontSize: 16,
      yPadding: 10,
      titleSpacing: 5,
    },
    // drawBorder: true,
    display: false,
    scales: {
      xAxes: [
        {
          barPercentage: 0.4,
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}
}
