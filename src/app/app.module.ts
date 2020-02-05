import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module'
import { BrowserModule } from '@angular/platform-browser';
/**
* Module imports
*/
import { ComponentRadiobuttonUIModule } from 'src/app/modules/component-radiobutton/component-radiobutton.module';
import { FlexSparkUIModule } from 'src/app/shared/modules/flex-spark/flex-spark.module';
import { ComponentCombolistUIModule } from 'src/app/shared/modules/component-combolist/component-combolist.module';
import { Mxml2009UIModule } from 'src/app/shared/modules/mxml2009/mxml2009.module';
import { FlexMxUIModule } from 'src/app/shared/modules/flex-mx/flex-mx.module';
import { MXWUIModule } from 'src/app/mxwmodule/MXWModule.module';

/**
* Definitions
*/
import { test } from './test/test.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    test,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    ComponentRadiobuttonUIModule,
    FlexSparkUIModule,
    ComponentCombolistUIModule,
    Mxml2009UIModule,
    FlexMxUIModule,
    MXWUIModule,
    AppRoutingModule,
    FlexLayoutModule,
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
