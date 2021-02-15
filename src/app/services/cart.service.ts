import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl= 'https://fakestoreapi.com/carts/';

  constructor(private http: HttpClient) { }
  
  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl);
  }
  deleteCartItem(id: number) {
   //return this.http.delete(`${this.cartUrl}/${id}`, {
    return this.http.delete(this.cartUrl+id);
  }
  //addProductToCart(product: Product): Observable<any> {
    //return this.http.post(cartUrl, { product });
  //}
  
}
