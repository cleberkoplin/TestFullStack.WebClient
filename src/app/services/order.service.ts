import {Injectable} from '@angular/core';
import { BaseConnection } from '../base/base.connection';
import { Router } from '@angular/router';
import { OrderRequest } from '../models/orderRequest.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterOrderRequest } from '../models/filterOrderRequest.model';

@Injectable()
export class OrderService extends BaseConnection{
    
    constructor(private router: Router, http: HttpClient) {
        super(http);
    }

    save(orderRequest: OrderRequest) : Observable<any>{
        return this.post("orders", JSON.parse(JSON.stringify(orderRequest)));
    }

    search(filterOrderRequest: FilterOrderRequest): Observable<any>{
        return this.getWith("orders", JSON.parse(JSON.stringify(filterOrderRequest)));
    }

}