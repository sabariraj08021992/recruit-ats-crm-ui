import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FieldConfig } from '../../dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from '../../dynamic-form/containers/dynamic-form/dynamic-form.component';
import { GlobalService } from 'src/app/services/global.service'; 
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() mode = "";
  @Input() data = {};
  @Input() config = [];

  @ViewChild(DynamicFormComponent,{static:false}) companyForm: DynamicFormComponent;
  @ViewChild('companyModal',{static:false}) companyModalRef: TemplateRef<any>;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();


  constructor( 
    public appService:GlobalService,
    private offcanvasService: NgbOffcanvas){
  }

  ngOnInit(): void {
      
  }

  open() {
		this.offcanvasService.open(this.companyModalRef, { backdrop: 'static', position:'end', scroll: true, panelClass:"offCanvasWidth" });
	}
  close(){
    this.offcanvasService.dismiss()
    this.cancel.emit("cancel")
  }
  initModalData(obj:any){
    if(this.companyForm){
      this.companyForm.loadValue(obj)
      this.validateSubmitBtn()
    }
  }
  formUpdateCallBack(e:any){
    
  }
  validateSubmitBtn(){
    if (!this.companyForm.valid) {
      this.companyForm.setDisabled('submit', true);
    }else{
      this.companyForm.setDisabled('submit', false);
    }
  }
  submitData(value: {[name: string]: any}) {
    this.submit.emit(value)
  }

}
