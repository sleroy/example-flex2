import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {VerticalLayout} from './flex-spark-vertical-layout/flex-spark-vertical-layout.component';
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
    VerticalLayout,
    Label,
  ],
  exports: [
    Application,
    Panel,
    RadioButton,
    RadioButtonGroup,
    VerticalLayout,
    Label,
  ],
  imports: [
    CommonModule,
    // Dependencies
  ]
})
export class FlexSparkUIModule { }
