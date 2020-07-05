import { Component } from "@angular/core";

@Component({
  selector: "app-upgrade-feautres",
  templateUrl: "./upgrade-feautres.component.html",
  styleUrls: ["./upgrade-feautres.component.scss"],
})
export class UpgradeFeautresComponent {
  constructor() {}

  elements: any = [
    {
      select: "Essentials",
      add: " d-none ",
      limit: "",
      extend: "d-none",
      bg: "bg",
    },
    {
      select: "Agent",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Notice Board",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Tax drawer",
      add: " yes ",
      limit: " 9901.00",
      extend: "show ",
    },
    {
      select: "Configure Documents",
      add: " yes ",
      limit: " 6000.00",
      extend: "show ",
    },
    {
      select: "Documents",
      add: " no ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Smart Drive",
      add: " no ",
      limit: " ",
      extend: "d-none ",
    },

    {
      select: "Main Features",
      add: " d-none ",
      limit: "",
      extend: "d-none",
      bg: "bg",
    },
    {
      select: "Email documents and invoices",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Electronic Invoicing",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Feature title",
      add: " yes ",
      limit: " 12.00",
      extend: "show ",
    },
    {
      select: "Rate management",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Customer and Supplier Management",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Management of attachments in invoices",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Product categories management",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Customer and Supplier Management",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Account and resource management",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Account and resource management",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Email document management",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Product Features",
      add: " d-none ",
      limit: "",
      extend: "d-none",

      bg: "bg",
    },
    {
      select: "Address management in documents",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },

    {
      select: "Payment method management",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Management of files, dossiers and files",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Management of products and services",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Import document xml",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Invitees",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Advanced Mailinglist",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Print models",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Options page",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Support",
      add: " d-none ",
      limit: "",
      extend: "d-none",

      bg: "bg",
    },
    {
      select: "Journal and payments",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Product Custom Fields",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },

    {
      select: "Product-file-upload ",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Product page ean",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Product page price supplier",
      add: " no ",
      limit: " ",
      extend: "d-none ",
    },

    {
      select: "Product page rate tarif",
      add: " no ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Product type product",
      add: " no ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Product type product with warehouse",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Product type service",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Company profile",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Pricing",
      add: " d-none ",
      limit: "",
      extend: "d-none",

      bg: "bg",
    },
    {
      select: "User profile",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Timetable",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Document payments card ",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Document transport card ",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Sdi Esit Pa ",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Unit-measure",
      add: " yes ",
      limit: " ",
      extend: "d-none ",
    },
    {
      select: "Integrated Webmail",
      add: " yes ",
      limit: "976.00",
      extend: "show ",
    },
  ];

  selectPackage: any = [
    {
      functionality: "Pack of 100",
      package: 100,
      deadline: "7/11/2020",
      amount: "129.99",
    },
    {
      functionality: "Pack of 100",
      package: 500,
      deadline: "10/12/2020",
      amount: "229.99",
    },
    {
      functionality: "Pack of 500",
      package: 4000,
      deadline: "7/11/2020",
      amount: "429.99",
    },
    {
      functionality: "Pack of 2500",
      package: 2500,
      deadline: "10/12/2020",
      amount: "729.99",
    },
  ];

  headPackage = ["Functionality", "Package", "Deadline", "Amount", ""];
}
