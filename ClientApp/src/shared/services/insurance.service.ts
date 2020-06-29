import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from '../models/insurance.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private httpClient: HttpClient, @Inject('BASE_API_URL') private baseUrl: string) { }

  getAllPurchases(): Observable<Insurance[]> {
    return this.httpClient.get<Insurance[]>(this.baseUrl + 'viewAllPurchases');
  }

  insertCarPurchase(insurance: Insurance): Observable<Insurance> {
    insurance.type = 'Car';
    return this.httpClient.post<Insurance>(this.baseUrl + 'addInsurance', insurance);
  }
  insertApartmentPurchase(insurance: Insurance): Observable<Insurance> {
    insurance.type = 'Apartment';
    return this.httpClient.post<Insurance>(this.baseUrl + 'addInsurance', insurance);
  }
  insertLifePurchase(insurance: Insurance): Observable<Insurance> {
    insurance.type = 'Life';
    return this.httpClient.post<Insurance>(this.baseUrl + 'addInsurance', insurance);
  }
  insertHealthPurchase(insurance: Insurance): Observable<Insurance> {
    insurance.type = 'Health';
    return this.httpClient.post<Insurance>(this.baseUrl + 'addInsurance', insurance);
  }
}
