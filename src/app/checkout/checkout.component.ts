import { Component } from "@angular/core";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent {
  constructor() {
    
  }

  elements: any = [
    {
      name: "Product One",
      explain: "Epires In 30days",
      img: "dropbox.png",
      type: "product",
      price: "$12.49",
      quantity: "1",
    },
    {
      name: "Product Tow",
      explain: "Epires On 25-05-2021",
      img: "dropbox.png",
      type: "product",
      price: "$12.49",
      quantity: "1",
    },
    {
      name: "SMS Package",
      explain: "",
      img: "sms.png",
      type: "Future",
      price: "$12.49",
      quantity: "100GB",
    },
    {
      name: "SMS Package",
      explain: "",
      img: "sms.png",
      type: "Future",
      price: "$12.49",
      quantity: "5000 SMS",
    },
  ];

  headElements = ["product name", "price", "type", "quantity"];



}
