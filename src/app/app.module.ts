import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthGuard } from './components/auth/auth-guard.service';
import { AuthService } from './components/auth/auth.service';
import { CreditCardPaymentComponent } from './components/credit-card-payment/credit-card-payment.component';
import { NewBankAccountComponent } from './components/new-bank-account/new-bank-account.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorPageComponent,
    SigninComponent,
    SignupComponent,
    CreditCardPaymentComponent,
    NewBankAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [AuthService, AuthGuard, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
