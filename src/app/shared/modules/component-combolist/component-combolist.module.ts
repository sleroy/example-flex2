import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module'

/**
* Module dependencies
*/

/**
* Definitions
*/
import {GeneriqueCombox} from './component-combolist-generique-combox/component-combolist-generique-combox.component';

/**
 * Definition of the module ComponentCombolistUIModule
 */
@NgModule({
  declarations: [
    GeneriqueCombox,
  ],
  exports: [
    GeneriqueCombox,
  ],
  imports: [
    // Dependencies
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class ComponentCombolistUIModule { }
