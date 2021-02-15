import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  deleteCartItem(id: number) {
    if (confirm('Are you sure you want to delete ?')){
      console.log("Delete");
    this.cartService.deleteCartItem(id).subscribe(
      (data) => {
        console.log("deleted");
        //this.loadCartItems();
      },
      (error) => console.log(error)
    );
    }
  }
}
