import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from 'src/app/services/server.service';
import * as moment from 'moment';

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
    validityDate: 0
  };
  paymentFinished : boolean = false;

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private serverService: ServerService
    ) {}

  private token :String;

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
  }

  onSubmit() {

    this.creditCard.PAN = this.creditCardForm.value.PAN;
    this.creditCard.securityCode = this.creditCardForm.value.securityCode;
    this.creditCard.cardHolderName = this.creditCardForm.value.cardHolderName;
    // this.creditCard.validityDate = this.creditCardForm.value.validityDateMonth + '' + this.creditCardForm.value.validityDateYear;
    console.log(moment("20"+ this.creditCardForm.value.validityDateYear + this.creditCardForm.value.validityDateMonth + "01", "YYYYMMDD").valueOf());
    this.creditCard.validityDate = 1605390265000;

    this.creditCardForm.reset();

    this.spinner.show();

    this.serverService.executePayment(this.creditCard,this.token)
      .subscribe(
        (response : any) => {
          console.log(response);
          this.paymentFinished = true;
        }
      );
 


  }


}
