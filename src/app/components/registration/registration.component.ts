import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.email]);
  name = new FormControl('', [Validators.required]);


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submit(){ 
    var user = new User();
    user.Username = this.username.value;
    user.Password = this.password.value;
    user.Email = this.email.value;
    user.Name = this.name.value;

    this.authService.registration(user);
  }

  getErrorMessageName() {
    return this.username.hasError('required') ? 'O nome é obrigatório' : '';
  }

  getErrorMessageUsername() {
    return this.username.hasError('required') ? 'O usuário é obrigatório' : '';
  }

  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'A senha é obrigatória' : '';  
  }

  getErrorMessageConfirmPassword() {
    if (this.confirmPassword.hasError('required')){
      return  'A confirmação da senha é obrigatória';
    }else if (this.confirmPassword != this.password){
      return  'Senhas não correspondem';
    }else{
      return '';
    }
  }

  getErrorEmail(){
    return this.email.hasError('email') ? 'O email é ' : ''; 
  }

}
