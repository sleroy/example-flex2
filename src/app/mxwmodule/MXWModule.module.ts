import { FlexSparkUIModule } from 'src/app/shared/modules/flex-spark/flex-spark.module';
import { FlexMxUIModule } from 'src/app/shared/modules/flex-mx/flex-mx.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Group} from './flex-spark-group/flex-spark-group.component';
import {HGroup} from './flex-spark-hgroup/flex-spark-hgroup.component';
import {VGroup} from './flex-spark-vgroup/flex-spark-vgroup.component';
import {Button} from './flex-spark-button/flex-spark-button.component';
import { MaterialModule } from '../material.module';
import { Mxml2009UIModule } from './mxml2009/mxml2009.module';


@NgModule({
  declarations: [
    Group,
    HGroup,
    VGroup,
    Button,
    

  ],
  exports: [
    Group,
    HGroup,
    VGroup,
    Button,
    FlexMxUIModule,
    FlexSparkUIModule,
    Mxml2009UIModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexMxUIModule,
    FlexSparkUIModule,
    Mxml2009UIModule
  ]
})
export class MXWUIModule { }
