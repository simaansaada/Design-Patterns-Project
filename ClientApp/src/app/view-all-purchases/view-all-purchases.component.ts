import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarInsurance } from '../models/car-insurance.model';

@Component({
  selector: 'app-view-all-purchases',
  templateUrl: './view-all-purchases.component.html',
  styleUrls: ['./view-all-purchases.component.scss']
})
export class ViewAllPurchasesComponent implements OnInit {
  cars: CarInsurance[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cars = [
      { name: 'adas', date: new Date(), familyName: 'saada', remarks: '1234' },
      { name: 'adas', date: new Date(), familyName: 'saada', remarks: '1234' },
      { name: 'adas', date: new Date(), familyName: 'saada', remarks: '1234' },
      { name: 'adas', date: new Date(), familyName: 'saada', remarks: '1234' },
      { name: 'adas', date: new Date(), familyName: 'saada', remarks: '1234' },
      { name: 'adas', date: new Date(), familyName: 'saada', remarks: '1234' },
      { name: 'adas', date: new Date(), familyName: 'saada', remarks: '1234' },
      { name: 'miras', date: new Date(), familyName: 'safadi', remarks: 'asdasdasdasdasdasas' }] as CarInsurance[];
  }
  backtoMainMenu(): void {
    this.router.navigate(['']);
  }

}
