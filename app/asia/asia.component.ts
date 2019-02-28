import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['../app.component.scss']
})
export class AsiaComponent implements AfterViewInit {

	title:string = 'Asia';
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
