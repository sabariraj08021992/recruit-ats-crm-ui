import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ComponentDataService {
  private componentModel = new BehaviorSubject({})
  componentInfo:any = this.componentModel.asObservable();

  constructor() { }

  change(message:any){

  }

}
