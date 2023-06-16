import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  public sidebarFlag:any = false;
  public globalNavigation:any = true;
  constructor(
    private http:HttpClient,
    private router:Router
  ) { 

  }

  hideGlobalNavigation(){
    this.globalNavigation = false;
  }

  getAuth(){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    let url = "/";
    return this.http.get(url,{
      headers:httpHeaders
    })
  }

  


}
