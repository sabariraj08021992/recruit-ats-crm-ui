import { Component, AfterViewInit,ViewChild} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faPencil,faColumns,faFilter,faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { GlobalService } from 'src/app/services/global.service'; 
import { CompanyComponent } from '../../shared/modals/company/company.component';
import { FieldConfig } from '../../shared/dynamic-form/models/field-config.interface';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';  // RxJS 6 syntax
import { FormFieldService } from 'src/app/services/form-field.service';
@Component({
  selector: 'app-company-lists',
  templateUrl: './company-lists.component.html',
  styleUrls: ['./company-lists.component.scss']
})
export class CompanyListsComponent implements AfterViewInit  {
  faPencil = faPencil
  faColumns = faColumns
  faFilter = faFilter
  faEllipsisV = faEllipsisV

  companyModalMode:string = "Add";
  companyModalFormObj:object = {}

  companyFieldConfig:FieldConfig[] = [];
  contactFieldConfig:FieldConfig[] = [];
  formConfig:any = []
  
  
  @ViewChild(CompanyComponent,{static:false}) companyModal:CompanyComponent;

  constructor(
    private router:Router,
    public appService:GlobalService,
    public fieldService:FormFieldService
  ){

  }


  ngOnInit(){
      this.fetchFieldConfig() 
  }

  ngAfterViewInit() {
   
  }

  fetchFieldConfig(){
    
      let companyFieldResponse = this.fieldService.getFieldsByEntity("company");
      let contactFieldResponse = this.fieldService.getFieldsByEntity("contact");
      forkJoin([companyFieldResponse,contactFieldResponse]).subscribe((res:any)=>{
        this.companyFieldConfig  = res[0];
        this.contactFieldConfig  = res[1];
        this.formConfig = [
          {
              type:"formGroup",
              section:"company",
              section_description:"Company Details",
              fields:this.companyFieldConfig.filter((x:any)=>{ return x.visible_on_form == true})
          },
          {
            type:"formGroup",
            section:"contact",
            section_description:"Company Contact Details",
            fields:this.contactFieldConfig.filter((x:any)=>{ return x.visible_on_form == true})
          }
          
         
      ]
      console.log(this.formConfig)
      })
      
  }

  loadCompanyModel(selectedMode:string){
    this.companyModalMode = selectedMode;
    this.companyModal.open()
    if(this.companyModalMode == "Edit"){
      setTimeout(()=>{
        this.companyModalFormObj = {
          name:"Sabariraj",
          food:"Pizza"
        }
        this.companyModal.initModalData(this.companyModalFormObj)
      },100)
    }
  }

  submitCompanyInfo(value:any){
     console.log("Company Submit Data",value)
  }

  cancelCompanyInfo(e:any){
    console.log("Company Model Closed")
  } 

}
