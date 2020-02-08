import { FlexSparkUIModule } from './flex-spark/flex-spark.module';
import { FlexMxUIModule } from './flex-mx/flex-mx.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [

  ],
  exports: [

    FlexMxUIModule,
    FlexSparkUIModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexMxUIModule,
    FlexSparkUIModule
  ]
})
export class MXWUIModule { }
