import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { OrderRequest } from '../../models/orderRequest.model';
import { Product } from '../../models/product.model';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  productIdList : number[];
  productList : Product[];

  price = new FormControl('');
  quantity = new FormControl('');
  selectedProduct = new FormControl('');

  newOrderForm = new FormGroup({
    price: this.price,
    quantity: this.quantity,
    selectedProduct: this.selectedProduct
  });

  constructor(private orderService: OrderService, private productService: ProductService) { }

  ngOnInit() {
    this.productIdList = [];
    var products = this.productService.getAll().subscribe(
      res =>{
        this.productList = res;
      });
  }

  addProduct(){
    for (var i=0; i < this.quantity.value; i++){
      this.productIdList.push(this.selectedProduct.value.id);
    }
    this.newOrderForm.reset();
  }

  doOrder(){
      var orderRequest = new OrderRequest();
      orderRequest.IdsProducts = this.productIdList;
      this.orderService.save(orderRequest).subscribe(
        res => {
          alert("Pedido Enviado!");
          this.ngOnInit();
          this.newOrderForm.reset();
        }
      );
  }

  loadProductForm(){
    this.price.setValue(this.selectedProduct.value.price);
  }

}
