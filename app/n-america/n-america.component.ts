import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n-america',
  templateUrl: '../region/region.component.html',
  styleUrls: ['../region/region.component.scss']
})
export class NAmericaComponent implements OnInit {
  
  title:string = 'North America';
  countries:Array<any>;
  /*== Adding necessary classes ==*/
  twoRows:boolean = true;
  gtCol:boolean = true;
  /* Column num in template */
  colsNum:string = '2';

  
  constructor() {
  	this.countries = [
  	{ 'title': 'Canada', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	},
  	{ 'title': 'Mexico', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'United States', 
  	  'cols': 2,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	  'link': 'usa'
  	},
  	];
  }

  ngOnInit() {
  }

}
