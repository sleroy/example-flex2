import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module'

/**
* Module dependencies
*/

/**
* Definitions
*/
import {HorizontalLayout} from './spark-layouts-horizontal-layout/spark-layouts-horizontal-layout.service';

/**
 * Definition of the module SparkLayoutsUIModule
 */
@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    // Dependencies
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class SparkLayoutsUIModule { }
