import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-russia',
  templateUrl: './russia.component.html',
  styleUrls: ['../../app.component.scss']
})
export class RussiaComponent implements OnInit {

  title:string = 'Russia';
  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Moscow', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	},
  	{ 'title': 'Saint Petersburg', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	  'link': 'st-petersburg'
  	}
  	];
  }

  ngOnInit() {
  }

}
