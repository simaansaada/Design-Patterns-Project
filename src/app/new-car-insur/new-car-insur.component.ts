import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-car-insur',
  templateUrl: './new-car-insur.component.html',
  styleUrls: ['./new-car-insur.component.scss']
})
export class NewCarInsurComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backtoMainMenu(): void {
    this.router.navigate(['']);
  }
}
