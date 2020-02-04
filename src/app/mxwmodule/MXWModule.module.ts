import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Group} from './flex-spark-group/flex-spark-group.component';
import {HGroup} from './flex-spark-hgroup/flex-spark-hgroup.component';
import {VGroup} from './flex-spark-vgroup/flex-spark-vgroup.component';
import {Button} from './flex-spark-button/flex-spark-button.component';


@NgModule({
  declarations: [
    Group,
    HGroup,
    VGroup,
    Button

  ],
  exports: [
    Group,
    HGroup,
    VGroup,
    Button
  ],
  imports: [
    CommonModule
  ]
})
export class MXWUIModule { }
