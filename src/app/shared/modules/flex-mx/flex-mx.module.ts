import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
/**
* Module imports
*/

/**
* Definitions
*/
import {CheckBox} from './flex-mx-check-box/flex-mx-check-box.component';
import {DateField} from './flex-mx-date-field/flex-mx-date-field.component';
import {Form} from './flex-mx-form/flex-mx-form.component';
import {FormItem} from './flex-mx-form-item/flex-mx-form-item.component';
import {TextInput} from './flex-mx-text-input/flex-mx-text-input.component';

/**
 * Definition of the module FlexMxUIModule
 */
@NgModule({
  declarations: [
    CheckBox,
    DateField,
    Form,
    FormItem,
    TextInput,
  ],
  exports: [
    CheckBox,
    DateField,
    Form,
    FormItem,
    TextInput,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    // Dependencies
  ]
})
export class FlexMxUIModule { }
