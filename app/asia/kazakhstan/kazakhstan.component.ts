import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kazakhstan',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class KazakhstanComponent implements OnInit {

  title:string = 'Kazakhstan';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  twoRows:boolean = true;
  gt:boolean = true;
  /* Columns number in template */
  colsNum:string = '2';
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Almaty', 
  	  'cols': 2,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	}
  	];
  }

  ngOnInit() {
  }

}
