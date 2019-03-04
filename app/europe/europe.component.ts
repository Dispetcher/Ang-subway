import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europe',
  templateUrl: '../region/region.component.html',
  styleUrls: ['../region/region.component.scss']
})
export class EuropeComponent implements OnInit {

  title:string = 'Europe';
  /*== Adding necessary classes ==*/
  twoRows:boolean = true;
  threeCols:boolean = true;
  gtCol3:boolean = true;
  /* Column num in template */
  colsNum:string = '3';
  countries:Array<any>;

  constructor() { 
  	this.countries = [
  	{ 'title': 'France', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'Germany', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'Greece', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'Italy', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'Russia', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'Spain', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	];
  }

  ngOnInit() {
  }

}
