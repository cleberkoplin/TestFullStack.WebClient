import { Component, OnInit } from '@angular/core';
import { FilterOrderRequest } from '../../models/filterOrderRequest.model';
import { OrderService } from '../../services/order.service'
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {

  priceStart = new FormControl('');
  priceEnd = new FormControl('');
  dateStart = new FormControl('');
  dateEnd = new FormControl('');

  searchOrderForm = new FormGroup({
    priceStart: this.priceStart,
    priceEnd: this.priceEnd,
    dateStart: this.dateStart,
    dateEnd: this.dateEnd
  });

  listOrder;
  listDetail;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  submit(){

    var filter = new FilterOrderRequest();
    filter.StartPrice = (this.priceStart.value != "" ? this.priceStart.value : 0);
    filter.EndPrice = (this.priceEnd.value != "" ? this.priceEnd.value : Number.MAX_SAFE_INTEGER);
    filter.StartDate = (this.dateStart.value != "" ? this.dateStart.value : new Date('1970-01-01Z00:00:00:000'));
    filter.EndDate = (this.dateEnd.value != "" ? this.dateEnd.value :  new Date('2999-01-01Z00:00:00:000'));

    this.orderService.search(filter).subscribe(
      res => {
        this.listOrder = res;
      }
    );

  }

  openOrder(id){
    this.orderService.getDetails(id).subscribe(
      res => {
        this.listDetail = res;
      }
    );
  }

}
