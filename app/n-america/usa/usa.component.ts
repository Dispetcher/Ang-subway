import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usa',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class UsaComponent implements OnInit {

  title:string = 'United States';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  twoRows:boolean = true;
  threeCols:boolean = true;
  gtCols3:boolean = true;
  /* Columns number in template */
  colsNum:string = '3';
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Atlanta', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	},
  	{ 'title': 'Los Angeles', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	  link: 'los-angeles'
  	},
  	{ 'title': 'Miami', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'New York', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	  link: 'new-york'
  	},
  	{ 'title': 'San Francisco', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	  link: 'san-francisco'
  	}
  	];
  }

  ngOnInit() {
  }

}
