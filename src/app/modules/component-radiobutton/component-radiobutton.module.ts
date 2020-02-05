import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module'


/**
* Module imports
*/
import { FlexSparkUIModule } from 'src/app/mxwmodule/flex-spark/flex-spark.module';

/**
* Definitions
*/
import {RadioButtonOuiNon} from './component-radiobutton-radio-button-oui-non/component-radiobutton-radio-button-oui-non.component';

/**
 * Definition of the module ComponentRadiobuttonUIModule
 */
@NgModule({
  declarations: [
    RadioButtonOuiNon,
  ],
  exports: [
    RadioButtonOuiNon,
  ],
  imports: [
    // Dependencies
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
      FlexSparkUIModule,
  ]
})
export class ComponentRadiobuttonUIModule { }
