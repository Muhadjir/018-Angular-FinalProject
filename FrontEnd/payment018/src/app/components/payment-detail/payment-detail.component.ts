import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentDetail } from 'src/app/models/payment-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
today: Date;
  constructor(public authService:AuthService,
    private toastr: ToastrService) { }
  ngOnInit(): void {
    this.authService.refresh();
    this.today = new Date()
  }

  getForm(selectedRecord: PaymentDetail) {
    this.authService.payDet = Object.assign({}, selectedRecord);
  }

  onDelete(id: number, nama:string) {
    if (confirm(`Apakah anda ingin menghapus data dari: ${nama}`)) {
      this.authService.delete(id)
        .subscribe(
          res => {
            this.authService.refresh();
            this.toastr.error("Data Berhasil Dihapus!", 'Payment Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }
}
