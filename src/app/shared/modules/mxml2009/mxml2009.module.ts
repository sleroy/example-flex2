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
import {Declarations} from './mxml-2009-declarations/mxml-2009-declarations.component';
import {Script} from './mxml-2009-script/mxml-2009-script.component';

/**
 * Definition of the module Mxml2009UIModule
 */
@NgModule({
  declarations: [
    Declarations,
    Script,
  ],
  exports: [
    Declarations,
    Script,
  ],
  imports: [
    // Dependencies
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class Mxml2009UIModule { }
