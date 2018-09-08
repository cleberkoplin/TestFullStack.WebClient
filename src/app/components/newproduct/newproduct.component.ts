import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  description = new FormControl('');
  price = new FormControl('');

  newProductForm = new FormGroup({
    name: this.name,
    description: this.description,
    price: this.price
  });
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.newProductForm.reset();
  }

  submit(){
    var product = new Product();
    product.Name = this.name.value;
    product.Description = this.description.value;
    product.Price = this.price.value;

    this.productService.save(product).subscribe(
      res => {
        alert("Produto savo com sucesso!");
        this.newProductForm.reset();
      }
    )
  }

  getErrorMessageName() {
    return this.name.hasError('required') ? 'O usuário é obrigatório' : '';
  }

}
