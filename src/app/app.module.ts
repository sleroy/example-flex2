import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MaterialModule } from './material.module'
import {MatInputModule} from '@angular/material';

/**
* Module imports
*/
import { ComponentCombolistUIModule } from 'src/app/shared/modules/component-combolist/component-combolist.module';
import { MxCollectionsUIModule } from 'src/app/shared/modules/mx-collections/mx-collections.module';
import { Mxml2009UIModule } from 'src/app/shared/modules/mxml2009/mxml2009.module';
import { ComponentRadiobuttonUIModule } from 'src/app/shared/modules/component-radiobutton/component-radiobutton.module';
import { SparkLayoutsUIModule } from 'src/app/shared/modules/spark-layouts/spark-layouts.module';
import { MXWFlexSparkUIModule } from 'src/app/mxwmodule/flex-spark/flex-spark.module';
import { MXWFlexMxUIModule } from 'src/app/mxwmodule/flex-mx/flex-mx.module';

/**
* Definitions
*/
import {test}from './test/test.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
declarations: [
AppComponent,
test,
],
imports: [
BrowserModule,
ComponentCombolistUIModule,
MxCollectionsUIModule,
Mxml2009UIModule,
ComponentRadiobuttonUIModule,
SparkLayoutsUIModule,
MXWFlexSparkUIModule,
MXWFlexMxUIModule,
AppRoutingModule,
FlexLayoutModule,
MaterialModule,
BrowserAnimationsModule,
  BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule
],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
