import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { CURDService } from './curd.service';
import { clone } from 'lodash';


@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CURDComponent implements OnInit {
  products: Product[];
  productForm: boolean = false;
  editProductForm: boolean = false;
  isNewForm: boolean;
  newProduct: any = {};
  editedProduct: any = {};

  constructor(private curdService: CURDService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.curdService.getProductsFromData();
  }

  showEditProductForm(product: Product) {
    if(!product) {
      this.productForm = false;
      return;
    }
    this.editProductForm = true;
    this.editedProduct = clone(product);
  }

  showAddProductForm() {
    // resets form if edited product
    if(this.products.length) {
      this.newProduct = {};
    }
    this.productForm = true;
    this.isNewForm = true;
  }

  saveProduct(product: Product) {
    if(this.isNewForm) {
      // add a new product
      this.curdService.addProduct(product);
    }
    this.productForm = false;
  }

  removeProduct(product: Product) {
    this.curdService.deleteProduct(product);
  }

  updateProduct() {
    this.curdService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  cancelNewProduct() {
    this.newProduct = {};
    this.productForm = false;
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }
}
