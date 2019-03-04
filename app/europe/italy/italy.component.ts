import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-italy',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class ItalyComponent implements OnInit {

  title:string = 'Italy';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  oneCol:boolean = true;
  gtCol1:boolean = true;
  /* Columns number in template */
  colsNum:string = '1';
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Milan', 
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
