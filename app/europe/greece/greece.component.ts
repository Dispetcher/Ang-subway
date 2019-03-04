import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greece',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class GreeceComponent implements OnInit {

  title:string = 'Greece';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  oneCol:boolean = true;
  gtCol1:boolean = true;
  /* Columns number in template */
  colsNum:string = '1';
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Athens', 
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
