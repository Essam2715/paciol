import { Component, OnInit } from '@angular/core';

@Component({
selector: 'table-responsive',
templateUrl: './table-responsive.component.html',
styleUrls: ['./table-responsive.component.scss'],
})
export class TableResponsiveComponent {
  elements: any = [
  {
     heading1: '0980932b-2310028',
    heading2: '26/Apr/2020',
    heading3: '26/Apr/2020',
    heading4: '2,500.75 €',
    heading5: '2,500.75 €',
    heading6: '2,500.75 €',
    heading7: '2,500.75 €',
    heading8: '2,500.75 €',
    heading9: '2,500.75 €'
  },
  {
     heading1: '0980932b-2310028',
    heading2: '26/Apr/2020',
    heading3: '26/Apr/2020',
    heading4: '2,500.75 €',
    heading5: '2,500.75 €',
    heading6: '2,500.75 €',
    heading7: '2,500.75 €',
    heading8: '2,500.75 €',
    heading9: '2,500.75 €'
  },
  {
     heading1: '0980932b-2310028',
    heading2: '26/Apr/2020',
    heading3: '26/Apr/2020',
    heading4: '2,500.75 €',
    heading5: '2,500.75 €',
    heading6: '2,500.75 €',
    heading7: '2,500.75 €',
    heading8: '2,500.75 €',
    heading9: '2,500.75 €'
  },
  
  {
     heading1: '0980932b-2310028',
    heading2: '26/Apr/2020',
    heading3: '26/Apr/2020',
    heading4: '2,500.75 €',
    heading5: '2,500.75 €',
    heading6: '2,500.75 €',
    heading7: '2,500.75 €',
    heading8: '2,500.75 €',
    heading9: '2,500.75 €'
  },
  {
     heading1: '0980932b-2310028',
    heading2: '26/Apr/2020',
    heading3: '26/Apr/2020',
    heading4: '2,500.75 €',
    heading5: '2,500.75 €',
    heading6: '2,500.75 €',
    heading7: '2,500.75 €',
    heading8: '2,500.75 €',
    heading9: '2,500.75 €'
  },
];
headElements = [ 'Invoice Number', 'Invoice Date', 'Payment Date',  'Invoice amount', 'Amount Paid', 'Balance Amount'];

}