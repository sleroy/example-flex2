import { FlexSparkUIModule } from 'src/app/shared/modules/flex-spark/flex-spark.module';
import { FlexMxUIModule } from 'src/app/shared/modules/flex-mx/flex-mx.module';
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
