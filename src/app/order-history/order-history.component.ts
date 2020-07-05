import { Component } from "@angular/core";

@Component({
  selector: "app-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.scss"],
})
export class OrderHistoryComponent {
  elements: any = [
    {
      name: "Basic Plan",
      type: "plan",
      expire: "26/Apr/2020",
      offer: "-",
      total: "2,500.75",
    },
    {
      name: "Package Mode 500",
      type: "Feature",
      expire: "26/Apr/2020",
      offer: "500 GB",
      total: "24,968,25",
    },
    {
      name: "Package Mode 1000",
      type: "Feature",
      expire: "26/Apr/2020",
      offer: "1000 GB",
      total: "13,556.99",
    },
    {
      name: "Package Mode 2500",
      type: "Feature",
      expire: "26/Apr/2020",
      offer: "2500 GB",
      total: "2,500.75",
    },
  ];

  headElements = [
    "Item Name",
    "Item Type",
    "Expires On",
    "offer Data",
    "Total Price",
  ];
}
