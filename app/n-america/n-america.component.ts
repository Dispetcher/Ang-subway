import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n-america',
  templateUrl: './n-america.component.html',
  styleUrls: ['../main-content/main-content.component.scss']
})
export class NAmericaComponent implements OnInit {
  
  title:string = 'North America';
  countries:Array<any>;
  
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
