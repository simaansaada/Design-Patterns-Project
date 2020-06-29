import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceType } from 'src/shared/models/insurance.model';

@Component({
  selector: 'app-sell-and-view',
  templateUrl: './sell-and-view.component.html',
  styleUrls: ['./sell-and-view.component.scss']
})
export class SellAndViewComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  newCarInsurance(): void {
    this.router.navigate(['new-insur/' + InsuranceType.Car]);
  }
  newApartmentInsurance(): void {
    this.router.navigate(['new-insur/' + InsuranceType.Apartment]);
  }
  newLifeInsurance(): void {
    this.router.navigate(['new-insur/' + InsuranceType.Life]);
  }

  newHealthInsurance(): void {
    this.router.navigate(['new-insur/' + InsuranceType.Health]);
  }
  viewAllPurhcases(): void {
    this.router.navigate(['view-all-purchases']);
  }
}
