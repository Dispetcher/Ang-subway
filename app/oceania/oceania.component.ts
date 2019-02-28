import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oceania',
  templateUrl: './oceania.component.html',
  styleUrls: ['../app.component.scss']
})
export class OceaniaComponent implements OnInit {

	title:string = 'Oceania';
  countries:Array<any>;
  
  constructor() {
  	this.countries = [
  	{ 'title': 'Australia', 
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
