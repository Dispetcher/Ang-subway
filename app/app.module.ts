import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material/material.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/*=== Regions ===*/
import { NAmericaComponent } from './n-america/n-america.component';
import { EuropeComponent } from './europe/europe.component';
import { AsiaComponent } from './asia/asia.component';
import { OceaniaComponent } from './oceania/oceania.component';
/*=== Asia ===*/
import { ChinaComponent } from './asia/china/china.component';
    import { HongKongComponent } from './asia/china/hong-kong/hong-kong.component';
import { KazakhstanComponent } from './asia/kazakhstan/kazakhstan.component';
    import { AlmatyComponent } from './asia/kazakhstan/almaty/almaty.component';
/*=== Europe ===*/
import { FranceComponent } from './europe/france/france.component';
    import { LilleComponent } from './europe/france/lille/lille.component';
import { GreeceComponent } from './europe/greece/greece.component';
    import { AthensComponent } from './europe/greece/athens/athens.component';
import { GermanyComponent } from './europe/germany/germany.component';
    import { FrankfurtComponent } from './europe/germany/frankfurt/frankfurt.component';
import { ItalyComponent } from './europe/italy/italy.component';
    import { MilanComponent } from './europe/italy/milan/milan.component';
import { RussiaComponent } from './europe/russia/russia.component';
    import { MoscowComponent } from './europe/russia/moscow/moscow.component';
    import { StPetersburgComponent } from './europe/russia/st-petersburg/st-petersburg.component';
import { SpainComponent } from './europe/spain/spain.component';
    import { BarcelonaComponent } from './europe/spain/barcelona/barcelona.component';
/*=== N.America ===*/
import { MexicoComponent } from './n-america/mexico/mexico.component';
    import { MexicoCityComponent } from './n-america/mexico/mexico-city/mexico-city.component';
import { CanadaComponent } from './n-america/canada/canada.component';
    import { MontrealComponent } from './n-america/canada/montreal/montreal.component';
    import { TorontoComponent } from './n-america/canada/toronto/toronto.component';
    import { VancouverComponent } from './n-america/canada/vancouver/vancouver.component';
import { UsaComponent } from './n-america/usa/usa.component';
    import { AtlantaComponent } from './n-america/usa/atlanta/atlanta.component';
    import { LosAngelesComponent } from './n-america/usa/los-angeles/los-angeles.component';
    import { MiamiComponent } from './n-america/usa/miami/miami.component';
    import { NewYorkComponent } from './n-america/usa/new-york/new-york.component';
    import { SanFranciscoComponent } from './n-america/usa/san-francisco/san-francisco.component';
/*=== Oceania ===*/
import { AustraliaComponent } from './oceania/australia/australia.component';
    import { MelbourneComponent } from './oceania/australia/melbourne/melbourne.component';

/*import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';*/



@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    MainComponent,
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
    AustraliaComponent,
    MoscowComponent,
    StPetersburgComponent,
    BarcelonaComponent,
    MilanComponent,
    AthensComponent,
    FrankfurtComponent,
    LilleComponent,
    HongKongComponent,
    AlmatyComponent,
    MontrealComponent,
    TorontoComponent,
    VancouverComponent,
    AtlantaComponent,
    LosAngelesComponent,
    MiamiComponent,
    NewYorkComponent,
    SanFranciscoComponent,
    MelbourneComponent,
    MexicoCityComponent
   /* RegionComponent,
    CountryComponent,
    CityComponent*/
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
