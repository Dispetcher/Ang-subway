import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-france',
  templateUrl: './france.component.html',
  styleUrls: ['../../app.component.scss']
})
export class FranceComponent implements OnInit {

  title:string = 'France';
  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Lille', 
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
