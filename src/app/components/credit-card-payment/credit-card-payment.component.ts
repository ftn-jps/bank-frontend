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
    pan: '',
    cvc: '',
    name: '',
    validUntilTimestamp: 0
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

    this.creditCard.pan = this.creditCardForm.value.pan;
    this.creditCard.cvc = this.creditCardForm.value.cvc;
    this.creditCard.name = this.creditCardForm.value.name;
    const realValidUntilTimestamp = (moment
      ("20"+ 
      this.creditCardForm.value.validityDateYear + 
      this.creditCardForm.value.validityDateMonth + 
      "01",
       "YYYYMMDD").valueOf()
      );
    // this.creditCard.validUntilTimestamp = 1605390265000;
    // ovo kada bude stvarno 
    this.creditCard.validUntilTimestamp = realValidUntilTimestamp;

    this.creditCardForm.reset();

    this.spinner.show();

    this.serverService.executePayment(this.creditCard,this.token)
      .subscribe(
        (response : any) => {
          this.spinner.hide;
          alert("Success")
          this.paymentFinished = true;
        }
      );
 


  }


}
