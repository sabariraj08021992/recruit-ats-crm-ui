import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  entity:string,
  type: string,
  field_name: string,
  label?: string,
  placeholder?: string,
  section:string,
  section_description:string,
  required?: boolean,
  disabled?: boolean,
  readonly?: boolean,
  sortable?:boolean,
  options?: any[],
  value?: any,
  order?:number,
  column_width?:number,
  filter_type?:string,
  is_array?:boolean,
  system_field?:boolean,
  visible_on_table?:boolean,
  visible_on_form?:boolean,
  validation_rules?:any[],
  multiselect?:boolean,
  additional_info?:string
}
