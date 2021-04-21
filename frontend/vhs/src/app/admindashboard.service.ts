import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  BAKEND_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  //Create User
  createUser(data: any){
    return this.http.post(`${this.BAKEND_URL}/admin/createuser`, data);
  }
}
