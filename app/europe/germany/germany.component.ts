import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-germany',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class GermanyComponent implements OnInit {

  title:string = 'Germany';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  oneCol:boolean = true;
  gtCol1:boolean = true;
  /* Columns number in template */
  colsNum:string = '1';
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Frankfurt', 
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
