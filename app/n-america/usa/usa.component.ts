import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['../../main-content/main-content.component.scss']
})
export class UsaComponent implements OnInit {

  title:string = 'United States';
  cities:Array<any>;
  
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
