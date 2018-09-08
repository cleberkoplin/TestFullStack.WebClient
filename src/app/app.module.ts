import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { Http } from '@angular/http';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatSelectModule, MatDividerModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ChangeProductComponent } from './components/change-product/change-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    NewproductComponent,
    ChangeProductComponent
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
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CurrencyMaskModule,
    MatSelectModule,
    MatDividerModule,
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
    ProductService,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }