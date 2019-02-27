import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NAmericaComponent } from './n-america/n-america.component';
import { EuropeComponent } from './europe/europe.component';
import { AsiaComponent } from './asia/asia.component';
import { OceaniaComponent } from './oceania/oceania.component';

import { CanadaComponent } from './n-america/canada/canada.component';
import { MexicoComponent } from './n-america/mexico/mexico.component';
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


const routes: Routes = [
	{ path: 'asia', component: AsiaComponent },
	{ path: 'asia/china', component: ChinaComponent },
	{ path: 'asia/kazakhstan', component: KazakhstanComponent },

	{ path: 'europe', component: EuropeComponent },
	{ path: 'europe/france', component: FranceComponent },
	{ path: 'europe/germany', component: GermanyComponent },
	{ path: 'europe/greece', component: GreeceComponent },
	{ path: 'europe/italy', component: ItalyComponent },
	{ path: 'europe/russia', component: RussiaComponent },
	{ path: 'europe/spain', component: SpainComponent },

	{ path: 'n.america', component: NAmericaComponent },
	{ path: 'n.america/canada', component: CanadaComponent },
	{ path: 'n.america/mexico', component: MexicoComponent },
	{ path: 'n.america/usa', component: UsaComponent },

	{ path: 'oceania', component: OceaniaComponent },
	{ path: 'oceania/australia', component: AustraliaComponent },

	{ path: '', redirectTo: '', pathMatch: 'full'},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
