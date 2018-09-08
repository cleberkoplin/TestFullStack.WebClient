import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service'
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.css']
})
export class ChangeProductComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  description = new FormControl('');
  price = new FormControl('');
  id = new FormControl('');

  editProductForm = new FormGroup({
    name: this.name,
    description: this.description,
    price: this.price,
    id: this.id
  });

  productList : Product[];
  selectedProduct;
  

  constructor(private productService : ProductService) { }

  ngOnInit() {
    var products = this.productService.getAll().subscribe(
      res =>{
        this.productList = res;
      });
  }

  submit(){
    var product = new Product();
    product.Name = this.name.value;
    product.Description = this.description.value;
    product.Price = this.price.value;
    product.Id = this.id.value;

    this.productService.update(product).subscribe(
      res => {
        alert("Produto atualizado com sucesso!");
        this.editProductForm.reset();
        this.ngOnInit();
      }
    )
  }

  delete(){
    console.log("DELETE PRODUCT :::: "+ this.selectedProduct);
    this.productService.remove(this.selectedProduct.id).subscribe(
      res => {
        alert("Produto removido com sucesso!");
        this.editProductForm.reset();
        this.ngOnInit();
      }
    );
  }

  loadProductForm(){
    this.name.setValue(this.selectedProduct.name);
    this.description.setValue(this.selectedProduct.description);
    this.price.setValue(this.selectedProduct.price);
    this.id.setValue(this.selectedProduct.id);
  }

  getErrorMessageName() {
    return this.name.hasError('required') ? 'O nome é obrigatório' : '';
  }

}
