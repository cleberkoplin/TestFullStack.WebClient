import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { Http } from '@angular/http';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  entryComponents: [LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent}
    ])
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    AuthService,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }