import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models/payment-detail';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  readonly api = 'http://localhost:5000/api/PaymentDetail'

  payDet: PaymentDetail = new PaymentDetail()
  list: PaymentDetail[];

  postData() {
    return this.http.post(this.api, this.payDet);
  }

  putData() {
    return this.http.put(`${this.api}/${this.payDet.paymentDetailId}`, this.payDet);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  async refresh() {
    this.http.get(this.api)
      .toPromise()
      .then(res =>this.list = res as PaymentDetail[]);
  }

}
