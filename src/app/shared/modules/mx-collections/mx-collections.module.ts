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
import {ArrayCollection} from './mx-collections-array-collection/mx-collections-array-collection.service';

/**
 * Definition of the module MxCollectionsUIModule
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
export class MxCollectionsUIModule { }
