import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spain',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class SpainComponent implements OnInit {

  title:string = 'Spain';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  oneCol:boolean = true;
  gtCol1:boolean = true;
  /* Columns number in template */
  colsNum:string = '1';
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Barcelona', 
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
