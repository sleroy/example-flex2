import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
/**
* Module imports
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
    CommonModule,
    FlexLayoutModule,
    // Dependencies
  ]
})
export class Mxml2009UIModule { }
