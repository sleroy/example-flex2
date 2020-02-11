// import { FlexSparkUIModule } from 'src/app/shared/modules/flex-spark/flex-spark.module';
// import { FlexMxUIModule } from 'src/app/shared/modules/flex-mx/flex-mx.module';
import { MXWFlexSparkUIModule } from 'src/app/mxwmodule/flex-spark/flex-spark.module';
import { MXWFlexMxUIModule } from 'src/app/mxwmodule/flex-mx/flex-mx.module';
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
