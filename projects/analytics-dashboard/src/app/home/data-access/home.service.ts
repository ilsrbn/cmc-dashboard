import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IAnalytics } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAnalytics() {
    return this.http.get<IAnalytics>("http://212.71.237.124:3000/api/analytics")
  }
}
