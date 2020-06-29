import { Component, OnInit, Input } from '@angular/core';
import { Insurance, InsuranceType } from '../../../shared/models/insurance.model';
import { Router, ActivatedRoute } from '@angular/router';
import { InsuranceService } from '../../../shared/services/insurance.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NextObserver } from 'rxjs';

@Component({
  selector: 'app-new-insurance',
  templateUrl: './new-insurance.component.html',
  styleUrls: ['./new-insurance.component.scss']
})
export class NewInsuranceComponent implements OnInit {
  type: string;
  insurance: Insurance;
  SUCCESS_DURATION = 1500; // in millisecconds.
  FAILURE_DURATION = 3000; // in milliseconds
  isLoading = false;
  constructor(private router: Router, private insuranceService: InsuranceService,
    private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.type = params.type;
    });
    this.insurance = new Insurance();
  }
  backtoMainMenu(): void {
    this.router.navigate(['']);
  }
  saveInsurance(): void {
    this.isLoading = true;
    const requestFinished: NextObserver<Insurance> = {
      next: (value) => {
        if (value !== null) {
          this.isLoading = false
          this.router.navigate(['']);
          this.snackBar.open('Added Successfully!', 'close', { duration: this.SUCCESS_DURATION });
        }
      }, error: (error) => {
        this.isLoading = false

        this.snackBar.open('Error has been occured, please try again later!', 'close', { duration: this.FAILURE_DURATION });
      }
    } as NextObserver<Insurance>;
    switch (this.type) {
      case InsuranceType.Car:
        this.insuranceService.insertCarPurchase(this.insurance).subscribe(requestFinished);
        break;
      case InsuranceType.Apartment:
        this.insuranceService.insertApartmentPurchase(this.insurance).subscribe(requestFinished);
        break;
      case InsuranceType.Health:
        this.insuranceService.insertHealthPurchase(this.insurance).subscribe(requestFinished);
        break;
      case InsuranceType.Life:
        this.insuranceService.insertLifePurchase(this.insurance).subscribe(requestFinished);
        break;
    }

  }
}
