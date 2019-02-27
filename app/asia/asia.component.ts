import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['../main-content/main-content.component.scss']
})
export class AsiaComponent implements OnInit {

	title:string = 'Asia';
	countries:Array<any>;

  constructor() { 
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

  ngOnInit() {}

}
