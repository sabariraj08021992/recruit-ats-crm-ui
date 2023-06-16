import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormUploadComponent } from './components/form-upload/form-upload.component';
import { FormDateComponent } from './components/form-date/form-date.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormUploadComponent,
    FormDateComponent
  ],
  exports: [
    DynamicFormComponent
  ],
  entryComponents: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormUploadComponent,
    FormDateComponent
  ],
  providers: [ BsDatepickerConfig],
})
export class DynamicFormModule {}
