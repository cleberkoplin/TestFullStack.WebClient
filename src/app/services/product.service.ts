import {Injectable} from '@angular/core';
import { BaseConnection } from '../base/base.connection';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService extends BaseConnection{
    
    constructor(private router: Router, http: HttpClient) {
        super(http);
    }

    save(product: Product) : Observable<any>{
        return this.post("products", JSON.parse(JSON.stringify(product)));
    }

    update(product: Product) : Observable<any>{
        return this.put("products/"+ product.Id, JSON.parse(JSON.stringify(product)));
    }

    remove(id: string) : Observable<any>{
        return this.post("products/"+ id);
    }

    getAll() : Observable<any>{
        var res = this.get("products/all");
        return res;
    }
}