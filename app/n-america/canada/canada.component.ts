import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canada',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class CanadaComponent implements OnInit {

  title:string = 'Canada';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  twoRows:boolean = true;
  gt:boolean = true;
  /* Columns number in template */
  colsNum:string = '2';
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Montreal', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	},
  	{ 'title': 'Toronto', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'Vancouver', 
  	  'cols': 2,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	];
  }

  ngOnInit() {
  }

}
