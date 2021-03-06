import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: '../region/region.component.html',
  styleUrls: ['../region/region.component.scss']
})
export class AsiaComponent implements AfterViewInit {

	title:string = 'Asia';
  colsNum:string = '2';
  gtCol:boolean = true;

	countries:Array<any>;

  constructor(public el:ElementRef) { 
  	this.countries = [
  	{ 'title': 'China', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'Kazakhstan', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	}
  	];
  }

  ngAfterViewInit() {
  }

}
