import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australia',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class AustraliaComponent implements OnInit {

  title:string = 'Australia';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  oneCol:boolean = true;
  gtCol1:boolean = true;
  /* Columns number in template */
  colsNum:string = '1';
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Melbourne', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	}
  	];
  }

  ngOnInit() {
  }

}
