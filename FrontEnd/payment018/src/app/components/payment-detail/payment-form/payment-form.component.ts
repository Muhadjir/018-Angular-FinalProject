import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/models/payment-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  seCode:boolean=false
  constructor(public authService:AuthService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.authService.payDet.paymentDetailId == 0)
      this.insert(form);
    else
      this.update(form);
  }

  insert(form: NgForm) {
    this.seCode=false
    this.authService.postData().subscribe(
      res => {
        this.resetForm(form);
        this.authService.refresh();
        this.toastr.success('Data Berhasil Ditambah!', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  update(form: NgForm) {
    this.seCode=true
    this.authService.putData().subscribe(
      res => {
        this.resetForm(form);
        this.authService.refresh();
        this.toastr.info('Data Berhasil Dirubah!', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.authService.payDet = {} as PaymentDetail;
  }
}
