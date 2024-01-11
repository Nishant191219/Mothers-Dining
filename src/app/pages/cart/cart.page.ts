import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public cart=[{"image": "assets/images/menu.jpg"}];
  constructor() { }

  ngOnInit() {
  }

}
