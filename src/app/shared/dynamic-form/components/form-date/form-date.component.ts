import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
// import { IAngularMyDpOptions} from 'angular-mydatepicker-fixed';
@Component({
  selector: 'form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss']
})
export class FormDateComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
  myDpOptions: any = {
    dateRange: false,
    dateFormat: 'yyyy-mm-dd',
    showTimeSelector:false,
    showMonthNumber:false,
    disableUntil: { year: 2023, month: 1, day: 1 ,hour:0,min:0},
    
  };
  constructor(){
    //window.addEventListener('scroll', this.hideDialog, true);
  }
  onDateSelect(e:any){

  }
  hideDialog = (): void => {
   // this.datepicker.hide();
   // console.log("teet")
  };
}
