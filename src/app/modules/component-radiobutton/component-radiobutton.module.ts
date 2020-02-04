import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
* Module imports
*/
import { FlexSparkUIModule } from 'src/app/shared/modules/flex-spark/flex-spark.module';
import { Mxml2009UIModule } from 'src/app/shared/modules/mxml2009/mxml2009.module';
import { MXWUIModule } from 'src/app/mxwmodule/MXWModule.module';

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
    CommonModule,
    // Dependencies
      FlexSparkUIModule,
      Mxml2009UIModule,
      MXWUIModule,
  ]
})
export class ComponentRadiobuttonUIModule { }
