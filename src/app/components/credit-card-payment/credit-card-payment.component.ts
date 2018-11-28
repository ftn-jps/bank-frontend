import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.css']
})
export class CreditCardPaymentComponent implements OnInit {

  @ViewChild('f') creditCardForm: NgForm;
  creditCard = {
    PAN: '',
    securityCode: '',
    cardHolderName: '',
    validityDate: ''
  };
  paymentFinished : boolean = false;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
  }

  onSubmit() {

    this.creditCard.PAN = this.creditCardForm.value.PAN;
    this.creditCard.securityCode = this.creditCardForm.value.securityCode;
    this.creditCard.cardHolderName = this.creditCardForm.value.cardHolderName;
    this.creditCard.validityDate = this.creditCardForm.value.validityDateMonth + '' + this.creditCardForm.value.validityDateYear;

    this.creditCardForm.reset();

    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.paymentFinished = true;
    }, 2000);

  }


}
