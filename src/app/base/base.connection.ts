import {Injectable} from '@angular/core';
import {URL_API} from '../app.api';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {ErrorHandler} from '../app.error-handler';

@Injectable()
export abstract class BaseConnection {

    constructor(private http: HttpClient){}

    get(method: string) : Observable<any>{  
        return this.http.get(URL_API + '/'+ method)
        .pipe(map(res => res), catchError(ErrorHandler.handleError));
    }

    post(method: string, object: JSON): Observable<any>{
        return this.http.post(URL_API + '/' + method, object)
        .pipe(map(res => res), catchError(ErrorHandler.handleError));
    }

    put(method: string, object: JSON): Observable<any>{
        return this.http.put(URL_API + '/' + method, object)
        .pipe(map(res => res), catchError(ErrorHandler.handleError));
    }
}