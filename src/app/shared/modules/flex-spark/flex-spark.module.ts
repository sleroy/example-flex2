import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
* Module imports
*/

/**
* Definitions
*/
import {Application} from './flex-spark-application/flex-spark-application.component';
import {Button} from './flex-spark-button/flex-spark-button.component';
import {Group} from './flex-spark-group/flex-spark-group.component';
import {HGroup} from './flex-spark-hgroup/flex-spark-hgroup.component';
import {Label} from './flex-spark-label/flex-spark-label.component';
import {layout} from './flex-spark-layout/flex-spark-layout.component';
import {Panel} from './flex-spark-panel/flex-spark-panel.component';
import {RadioButton} from './flex-spark-radio-button/flex-spark-radio-button.component';
import {RadioButtonGroup} from './flex-spark-radio-button-group/flex-spark-radio-button-group.component';
import {VerticalLayout} from './flex-spark-vertical-layout/flex-spark-vertical-layout.component';
import {VGroup} from './flex-spark-vgroup/flex-spark-vgroup.component';

/**
 * Definition of the module FlexSparkUIModule
 */
@NgModule({
  declarations: [
    Application,
    Button,
    Group,
    HGroup,
    Label,
    layout,
    Panel,
    RadioButton,
    RadioButtonGroup,
    VerticalLayout,
    VGroup,
  ],
  exports: [
    Application,
    Button,
    Group,
    HGroup,
    Label,
    layout,
    Panel,
    RadioButton,
    RadioButtonGroup,
    VerticalLayout,
    VGroup,
  ],
  imports: [
    CommonModule,
    // Dependencies
  ]
})
export class FlexSparkUIModule { }
