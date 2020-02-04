import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Group} from './flex-spark-group/flex-spark-group.component';
import {HGroup} from './flex-spark-hgroup/flex-spark-hgroup.component';
import {VGroup} from './flex-spark-vgroup/flex-spark-vgroup.component';


@NgModule({
  declarations: [
    Group,
    HGroup,
    VGroup,

  ],
  exports: [
    Group,
    HGroup,
    VGroup
  ],
  imports: [
    CommonModule
  ]
})
export class MXWUIModule { }
