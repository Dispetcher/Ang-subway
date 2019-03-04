import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-china',
  templateUrl: '../../country/country.component.html',
  styleUrls: ['../../country/country.component.scss']
})
export class ChinaComponent implements OnInit {

  title:string = 'China';
  cities:Array<any>;
  /*===Adding necessary classes ===*/
  twoRows:boolean = true;
  gt:boolean = true;
  /* Columns number in template */
  colsNum:string = '2';

  constructor() {
  	this.cities = [
  	{ 'title': 'Hong Kong', 
  	  'cols': 2,
	 	  'img': {
	 	  	'src': '#'
  	  },
      'link': 'hong-kong'
  	}
  	];
  }

  ngOnInit() {
  }

}
