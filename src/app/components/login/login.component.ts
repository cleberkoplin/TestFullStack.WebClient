import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  register = false;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  submit(){
    var user = new User();
    user.Username = this.username.value;
    user.Password = this.password.value;

    this.authService.login(user);
  }

  getErrorMessageUsername() {
    return this.username.hasError('required') ? 'O usuário é obrigatório' : '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'A senha é obrigatória' : '';  
  }

}