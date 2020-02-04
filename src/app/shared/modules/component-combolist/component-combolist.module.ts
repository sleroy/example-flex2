import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
* Module imports
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
    CommonModule,
    // Dependencies
  ]
})
export class ComponentCombolistUIModule { }
