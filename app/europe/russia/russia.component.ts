import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-russia',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class RussiaComponent implements OnInit {

  title:string = 'Russia';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  gt:boolean = true;
  /* Columns number in template */
  colsNum:string = '2';
  
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
