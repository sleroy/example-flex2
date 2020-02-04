import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Group} from './flex-spark-group/flex-spark-group.component';
import {HGroup} from './flex-spark-hgroup/flex-spark-hgroup.component';
import {layout} from './flex-spark-layout/flex-spark-layout.component';
import {VGroup} from './flex-spark-vgroup/flex-spark-vgroup.component';
//import {VerticalLayout} from './flex-';
import {Button} from './flex-spark-button/flex-spark-button.component';


@NgModule({
  declarations: [
    Group,
    HGroup,
    layout,
    VGroup,
    Button

  ],
  exports: [
    Button,    
    Group,
    HGroup,
    layout,
    VGroup
  ],
  imports: [
    CommonModule
  ]
})
export class MXWUIModule { }
