import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  serverFeedBack: any;

  loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  login(loginForm: any){
    console.log(loginForm.value);
    //login
    this.http.loginAdmin(loginForm.value).subscribe(data => this.serverFeedBack = data );
    //console.log(HttpErrorResponse.);
    
  }

  constructor(private http: AdminauthService) { }

  ngOnInit(): void {
  }

}
