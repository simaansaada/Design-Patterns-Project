import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurance } from '../../../shared/models/insurance.model';
import { InsuranceService } from '../../../shared/services/insurance.service';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-view-all-purchases',
  templateUrl: './view-all-purchases.component.html',
  styleUrls: ['./view-all-purchases.component.scss']
})
export class ViewAllPurchasesComponent implements OnInit {
  cars: Insurance[];
  constructor(private router: Router, private insuranceSerive: InsuranceService) {
  }

  ngOnInit(): void {

    this.insuranceSerive.getAllPurchases().subscribe((data) => {
      this.cars = data;
    });
  }
  backtoMainMenu(): void {
    this.router.navigate(['']);
  }
  downloadFile() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      title: 'Your title',
      useBom: true,
      noDownload: false,
      headers: ['name',
        'familyName',
        'date',
        'remarks', 'type'],
      nullToEmptyString: true,
    };

    const angularCsv: Angular5Csv = new Angular5Csv(this.cars, 'loggs', options);
  }
}
