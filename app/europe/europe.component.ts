import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['../app.component.scss']
})
export class EuropeComponent implements OnInit {

  title:string = 'Europe';
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
