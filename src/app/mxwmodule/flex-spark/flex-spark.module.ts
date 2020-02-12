import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/**
* Module imports
*/

/**
* Definitions
*/
import { Application } from './flex-spark-application/flex-spark-application.component';
import { Panel } from './flex-spark-panel/flex-spark-panel.component';
import { RadioButton } from './flex-spark-radio-button/flex-spark-radio-button.component';
import { RadioButtonGroup } from './flex-spark-radio-button-group/flex-spark-radio-button-group.component';
import { Label } from './flex-spark-label/flex-spark-label.component';
import { MaterialModule } from 'src/app/material.module';
import { Group } from './flex-spark-group/flex-spark-group.component';
import { HGroup } from './flex-spark-hgroup/flex-spark-hgroup.component';
import { VGroup } from './flex-spark-vgroup/flex-spark-vgroup.component';
import { Button } from './flex-spark-button/flex-spark-button.component';
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
    Group,
    HGroup,
    VGroup,
    Button,
  ],
  exports: [
    Application,
    Panel,
    RadioButton,
    RadioButtonGroup,
    Label,
    Group,
    HGroup,
    VGroup,
    Button,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    // Dependencies
  ]
})
export class MXWFlexSparkUIModule { }
