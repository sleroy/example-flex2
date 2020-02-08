import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module'


/**
* Module imports
*/

/**
* Definitions
*/
import {Script} from './mxml-2009-script/mxml-2009-script.component';
import {Declarations} from './mxml-2009-declarations/mxml-2009-declarations.component';

/**
 * Definition of the module Mxml2009UIModule
 */
@NgModule({
  declarations: [
    Script,
    Declarations,
  ],
  exports: [
    Script,
    Declarations,
  ],
  imports: [
    // Dependencies
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class Mxml2009UIModule { }
