import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-bank-account',
  templateUrl: './new-bank-account.component.html'
})
export class NewBankAccountComponent implements OnInit {
  
  @ViewChild('f') bankAccountForm: NgForm;
  bankAccountOwnerName = '';
  accountSubmitted : boolean = false;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  onSubmit() {
    
    this.bankAccountOwnerName = this.bankAccountForm.value.bankAccountOwnerName;

    console.log(this.bankAccountOwnerName);

    this.bankAccountForm.reset();

    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
        this.accountSubmitted = true;
    }, 2000);
  }

}
