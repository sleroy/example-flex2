import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
/**
* Module imports
*/
import { ComponentRadiobuttonUIModule } from 'src/app/modules/component-radiobutton/component-radiobutton.module';
import { FlexSparkUIModule } from 'src/app/shared/modules/flex-spark/flex-spark.module';
import { ComponentCombolistUIModule } from 'src/app/shared/modules/component-combolist/component-combolist.module';
import { Mxml2009UIModule } from 'src/app/shared/modules/mxml2009/mxml2009.module';
import { FlexMxUIModule } from 'src/app/shared/modules/flex-mx/flex-mx.module';

/**
* Definitions
*/
import {test}from './test/test.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
declarations: [
AppComponent,
test,
],
imports: [
FlexLayoutModule,
BrowserModule,
ComponentRadiobuttonUIModule,
FlexSparkUIModule,
ComponentCombolistUIModule,
Mxml2009UIModule,
FlexMxUIModule,
AppRoutingModule,
BrowserAnimationsModule
],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
