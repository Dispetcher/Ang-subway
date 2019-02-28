import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canada',
  templateUrl: './canada.component.html',
  styleUrls: ['../../main-content/main-content.component.scss']
})
export class CanadaComponent implements OnInit {

  title:string = 'Canada';
  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Montreal', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	},
  	{ 'title': 'Toronto', 
  	  'cols': 1,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	{ 'title': 'Vancouver', 
  	  'cols': 2,
	 	  'img': {
	 	  	'src': '#'
  	  }
  	},
  	];
  }

  ngOnInit() {
  }

}
