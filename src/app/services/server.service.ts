import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private url: String = "https://localhost:8085";

constructor(private http: HttpClient) { }

executePayment(formData: any, token :String){
  let body = JSON.stringify(formData);
  console.log(body);
  
  var headers = new HttpHeaders({
    'Content-Type' : 'application/json'
  });
  return this.http.post(this.url +'/api/transactions/' + token, body, {headers:headers});

}

}
