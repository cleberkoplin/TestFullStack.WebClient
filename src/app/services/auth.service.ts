import {Injectable} from '@angular/core';
import { BaseConnection } from '../base/base.connection';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable()
export class AuthService extends BaseConnection{
    
    login(user: User) : Observable<User[]>{
        var retorno = this.post("sigin", JSON.parse(JSON.stringify(user)));
        return retorno;
    }
}