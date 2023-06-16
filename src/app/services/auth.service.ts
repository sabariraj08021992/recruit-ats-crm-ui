import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable} from 'rxjs';
import { AppSettings } from "../app.constants";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private router:Router
  ) { 

  }

  registerAccount(payload_data:any){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    let url = AppSettings.API_ENDPOINT+"/accounts";
    return this.http.post(url,payload_data,{
      headers:httpHeaders
    })
  }


  validateLogin(payload_data:any){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    let url = AppSettings.API_ENDPOINT+"/auth/login";
    return this.http.post(url,payload_data,{
      headers:httpHeaders
    })
  }

 
}
