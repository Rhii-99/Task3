import { Component, OnInit } from '@angular/core';
//import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : CartItem[] = [];
  items: CartItem[] = [];
  cartTotal = 0

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((resData) => {
      this.cartItems = resData;
      console.log(this.cartItems);
    })
  }
}
