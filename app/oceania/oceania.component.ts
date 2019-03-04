import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oceania',
  templateUrl: '../region/region.component.html',
  styleUrls: ['../region/region.component.scss']
})
export class OceaniaComponent implements OnInit {

	title:string = 'Oceania';
  countries:Array<any>;
  /*== Adding necessary classes ==*/
  oneCol:boolean = true;
  gtCol1:boolean = true;
  /* Column num in template */
  colsNum:string = '1';  
  
  constructor() {
  	this.countries = [
  	{ 'title': 'Australia', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	}
  	];
  }

  ngOnInit() {
  }

}
