import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCT_ITEMS } from './product-data';
import { findIndex } from 'lodash';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CURDService {
  
  private pItems= PRODUCT_ITEMS;
  constructor( private http:Http) { }
  
 
  getProductsFromData(): Product[] {
    console.log(this.pItems);
    return this.pItems
  }
  
  addProduct(product: Product) {
    this.pItems.push(product);
    console.log(this.pItems);
  }
  
  updateProduct(product: Product) {
    let index = findIndex(this.pItems, (p: Product) => {
      return p.id === product.id;
    });
    this.pItems[index] = product;
  }
  
  deleteProduct(product: Product) {
    this.pItems.splice(this.pItems.indexOf(product), 1);
    console.log(this.pItems);
  }
}
