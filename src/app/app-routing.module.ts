import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { CreditCardPaymentComponent } from './components/credit-card-payment/credit-card-payment.component';
import { AuthGuard } from './components/auth/auth-guard.service';
import { NewBankAccountComponent } from './components/new-bank-account/new-bank-account.component';

const appRoutes: Routes = 
[
    {path: '', component: HomeComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'new-bank-account', component: NewBankAccountComponent },
    { path: 'credit-card-payment/:token', component: CreditCardPaymentComponent }, //, canActivate: [AuthGuard]}, 
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }