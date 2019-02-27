import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './main-content/main-content.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NAmericaComponent } from './n-america/n-america.component';
import { EuropeComponent } from './europe/europe.component';
import { AsiaComponent } from './asia/asia.component';
import { OceaniaComponent } from './oceania/oceania.component';

import { MexicoComponent } from './n-america/mexico/mexico.component';
import { CanadaComponent } from './n-america/canada/canada.component';
import { UsaComponent } from './n-america/usa/usa.component';

import { FranceComponent } from './europe/france/france.component';
import { GreeceComponent } from './europe/greece/greece.component';
import { GermanyComponent } from './europe/germany/germany.component';
import { ItalyComponent } from './europe/italy/italy.component';
import { RussiaComponent } from './europe/russia/russia.component';
import { SpainComponent } from './europe/spain/spain.component';

import { ChinaComponent } from './asia/china/china.component';
import { KazakhstanComponent } from './asia/kazakhstan/kazakhstan.component';

import { AustraliaComponent } from './oceania/australia/australia.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    NAmericaComponent,
    EuropeComponent,
    AsiaComponent,
    PageNotFoundComponent,
    MexicoComponent,
    CanadaComponent,
    UsaComponent,
    FranceComponent,
    GreeceComponent,
    GermanyComponent,
    ItalyComponent,
    RussiaComponent,
    SpainComponent,
    ChinaComponent,
    KazakhstanComponent,
    OceaniaComponent,
    AustraliaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
