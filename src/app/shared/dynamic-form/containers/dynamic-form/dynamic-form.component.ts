import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl, FormBuilder,Validators   } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']

})
export class DynamicFormComponent implements OnChanges,  OnInit {

  @Input()
  config: any = [];

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  cancel: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  formUpdate: EventEmitter<any> = new EventEmitter<any>();


  form: FormGroup;
  formGroupArr:any = [];
  formGroupObj:any = {};
  activeIds:any = []

  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.form.valueChanges.subscribe((val) => {
      this.formUpdate.emit(val);
    });
  }

  ngOnChanges(changes:any) {
    
  }

  private buildForm() {
    if(this.config){
      this.config.forEach((formGroup:any,m:any) => {
        if(formGroup['type'] == "formGroup"){
          this.formGroupObj[formGroup.section] = this.fb.group({})
          this.formGroupArr.push(formGroup.section)
          this.activeIds.push("panel-"+(this.formGroupArr.length - 1))
        }
      })
    
      this.loadFormControlFields();
      this.form = this.fb.group(this.formGroupObj);
      // console.log(this.form)
      // console.log( this.activeIds)
    }
  }

  loadFormControlFields() {
    this.config.forEach((formGroup:any) => {
      if(formGroup['type'] == "formGroup"){
        const controls = formGroup['fields'];
        for(let i=0;i<controls.length;i++){
          const fieldProps:any = controls[i];
          this.formGroupObj[formGroup.section].addControl(fieldProps.field_name, this.createControl(fieldProps));
        }
      }
    })
  }

  createControl(config: FieldConfig) {
    let rules:any =[]
    if(config.validation_rules){
      rules = config.validation_rules
    }
    const validation = this.addValidator(rules)
    return this.fb.control(null, validation);
  }

  private addValidator(rules:any) {
    if (!rules) {
      return [];
    }
    let validators:any = []
    rules.map((rule:any) => {
      switch (rule.error_type) {
        case "required":
          validators.push(Validators.required);
          break;
        default:
          break;
      }
    });
    return validators;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable': 'enable';
      this.form.controls[name][method]();
      return;
    }

    // this.config = this.config.map((item) => {
    //   if (item.name === name) {
    //     item.disabled = disable;
    //   }
    //   return item;
    // });
  }

  updateValue(value: any) {
    this.form.patchValue(value, {emitEvent: true});
  }

  loadValue(value: any) {
    this.form.patchValue(value, {emitEvent: false});
  }
  resetForm(value: any) {
    this.form.reset();
  }
}
