import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private token: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.token = this.route.snapshot.fragment.split('/')[2];
    if (this.token) {
      this.router.navigateByUrl('credit-card-payment/'+this.token)
    }
  }

}
