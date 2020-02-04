import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
/**
* Module imports
*/

/**
* Definitions
*/
import {Application} from './flex-spark-application/flex-spark-application.component';
import {Panel} from './flex-spark-panel/flex-spark-panel.component';
import {RadioButton} from './flex-spark-radio-button/flex-spark-radio-button.component';
import {RadioButtonGroup} from './flex-spark-radio-button-group/flex-spark-radio-button-group.component';
import {Label} from './flex-spark-label/flex-spark-label.component';

/**
 * Definition of the module FlexSparkUIModule
 */
@NgModule({
  declarations: [
    Application,
    Panel,
    RadioButton,
    RadioButtonGroup,
    Label,
  ],
  exports: [
    Application,
    Panel,
    RadioButton,
    RadioButtonGroup,
    Label,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    // Dependencies
  ]
})
export class FlexSparkUIModule { }
