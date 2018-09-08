import { Component, Input } from '@angular/core';
import { LoginComponent } from './components/login/login.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TestFullStack';
  register = false;

  constructor(){
    
  }

  ngOnInit(){
    
  }

  showHome(){
    return (localStorage != null && localStorage.getItem("token") != null)
  }

  showRegister(){
     this.register = true;
  }

  hideRegister(){
    this.register = false;
  }
}
