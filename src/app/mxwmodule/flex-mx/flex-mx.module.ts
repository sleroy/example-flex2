import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


/**
* Module imports
*/

/**
* Definitions
*/
import {Form} from './flex-mx-form/flex-mx-form.component';
import {TextInput} from './flex-mx-text-input/flex-mx-text-input.component';
import {DateField} from './flex-mx-date-field/flex-mx-date-field.component';
import {CheckBox} from './flex-mx-check-box/flex-mx-check-box.component';
import {FormItem} from './flex-mx-form-item/flex-mx-form-item.component';
import { MaterialModule } from 'src/app/material.module';
import { MatInputModule } from '@angular/material';

/**
 * Definition of the module FlexMxUIModule
 */
@NgModule({
  declarations: [
    Form,
    TextInput,
    DateField,
    CheckBox,
    FormItem,
  ],
  exports: [
    Form,
    TextInput,
    DateField,
    CheckBox,
    FormItem,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    MatInputModule
    // Dependencies
  ]
})
export class FlexMxUIModule { }
