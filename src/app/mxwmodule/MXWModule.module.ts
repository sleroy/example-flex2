import { MXWFlexSparkUIModule } from './flex-spark/flex-spark.module';
import { MXWFlexMxUIModule } from './flex-mx/flex-mx.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [

  ],
  exports: [

    MXWFlexMxUIModule,
    MXWFlexSparkUIModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MXWFlexMxUIModule,
    MXWFlexSparkUIModule
  ]
})
export class MXWUIModule { }
