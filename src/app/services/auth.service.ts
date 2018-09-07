import {Injectable} from '@angular/core';
import { BaseConnection } from '../base/base.connection';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService extends BaseConnection{
    
    constructor(private router: Router, http: HttpClient) {
        super(http);
    }

    login(user: User) {

        localStorage.clear();

        this.post("signin", JSON.parse(JSON.stringify(user))).subscribe(
            res => {

                if (res["token"] == false){
                    alert("Usuário e senha inválidos");
                }else{
                    localStorage.setItem("token", res["token"]);
                    localStorage.setItem("user", JSON.stringify(user));        
    
                    this.router.navigate(['/home']);
                } 
            });
    }

    registration(user: User) {

        localStorage.clear();

        this.post("signup", JSON.parse(JSON.stringify(user))).subscribe(
            res => {

                if (res["token"] == false){
                    alert("Ocorreu um erro ao realizar o cadastro. Tente novamente.");
                }else{
                    localStorage.setItem("token", res["token"]);
                    localStorage.setItem("user", JSON.stringify(user));        
    
                    this.router.navigate(['/home']);
                } 
            });
    }
}