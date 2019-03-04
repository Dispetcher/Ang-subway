import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mexico',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class MexicoComponent implements OnInit {

  title:string = 'Mexico';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  twoRows:boolean = true;
  gt:boolean = true;
  /* Columns number in template */
  colsNum:string = '2';
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Mexico', 
  	  'cols': 2,
	 	  'img': {
	 	  	'src': '#'
  	  },
      link: 'mexico-city'
  	},
   	];
  }

  ngOnInit() {
  }

}
