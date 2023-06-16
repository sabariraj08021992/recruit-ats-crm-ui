import { Injectable } from '@angular/core';
import { AppSettings } from '../app.constants';
import { HttpClient, HttpHeaders, HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FormFieldService {

  constructor(
    private http:HttpClient
  ) { }

  
  getFieldsByEntity(entity:String): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("recruitment_ats_token")}`
    })
    let apiUrl = AppSettings.API_ENDPOINT+"/fields/"+entity
    return this.http.get(apiUrl, { headers: headers })
  }

}
