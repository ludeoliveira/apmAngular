import { Component, OnInit } from '@angular/core';

@Component({
  // the selector property is only necessary when we wanto to nest this component within another component
  // selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle:String = 'Product Detail'

  constructor() { }

  ngOnInit(): void {
  }

}
