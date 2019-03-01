import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
	{ path: 'asia', component: AsiaComponent },
	{ path: 'asia/china', component: ChinaComponent },
	{ path: 'asia/china/hong-kong', component: HongKongComponent },
	{ path: 'asia/kazakhstan', component: KazakhstanComponent },
	{ path: 'asia/kazakhstan/almaty', component: AlmatyComponent },

	{ path: 'europe', component: EuropeComponent },
	{ path: 'europe/france', component: FranceComponent },
	{ path: 'europe/france/lille', component: LilleComponent },
	{ path: 'europe/germany', component: GermanyComponent },
	{ path: 'europe/germany/frankfurt', component: FrankfurtComponent },	
	{ path: 'europe/greece', component: GreeceComponent },
	{ path: 'europe/greece/athens', component: AthensComponent },
	{ path: 'europe/italy', component: ItalyComponent },
	{ path: 'europe/italy/milan', component: MilanComponent },
	{ path: 'europe/russia', component: RussiaComponent },
	{ path: 'europe/russia/moscow', component: MoscowComponent },
	{ path: 'europe/russia/st-petersburg', component: StPetersburgComponent },
	{ path: 'europe/spain', component: SpainComponent },
	{ path: 'europe/spain/barcelona', component: BarcelonaComponent },

	{ path: 'n-america', component: NAmericaComponent },
	{ path: 'n-america/canada', component: CanadaComponent },
	{ path: 'n-america/canada/montreal', component: MontrealComponent },
	{ path: 'n-america/canada/toronto', component: TorontoComponent },
	{ path: 'n-america/canada/vancouver', component: VancouverComponent },	
	{ path: 'n-america/mexico', component: MexicoComponent },
	{ path: 'n-america/mexico/mexico-city', component: MexicoCityComponent },	
	{ path: 'n-america/usa', component: UsaComponent },
	{ path: 'n-america/usa/atlanta', component: AtlantaComponent },
	{ path: 'n-america/usa/los-angeles', component: LosAngelesComponent },
	{ path: 'n-america/usa/miami', component: MiamiComponent },
	{ path: 'n-america/usa/new-york', component: NewYorkComponent },
	{ path: 'n-america/usa/san-francisco', component: SanFranciscoComponent },

	{ path: 'oceania', component: OceaniaComponent },
	{ path: 'oceania/australia', component: AustraliaComponent },
	{ path: 'oceania/australia/melbourne', component: MelbourneComponent },

	{ path: '', redirectTo: '', pathMatch: 'full'},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
