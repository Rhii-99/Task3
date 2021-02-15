//import { Product } from './product';

export interface CartItem {
    id:Number;
    userId:Number;
    date:Date;
    products:[{productId:Number,quantity:Number}];
    __v:Number;
}