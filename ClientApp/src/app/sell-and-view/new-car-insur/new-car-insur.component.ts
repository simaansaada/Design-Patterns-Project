import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/shared/services/insurance.service';
import { Insurance } from 'src/shared/models/insurance.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-car-insur',
  templateUrl: './new-car-insur.component.html',
  styleUrls: ['./new-car-insur.component.scss']
})
export class NewCarInsurComponent implements OnInit {

  @Input() type: string;
  insurance: Insurance;
  constructor(private router: Router, private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.insurance = new Insurance();
  }
  backtoMainMenu(): void {
    this.router.navigate(['']);
  }
  saveCarInsurance(): void {

    this.insuranceService.insertCarPurchase(this.insurance).subscribe((value) => {
      if (value !== null) {
        this.router.navigate(['']);
      }
    });
  }
}
