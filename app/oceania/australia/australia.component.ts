import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['../../app.component.scss']
})
export class AustraliaComponent implements OnInit {

  title:string = 'Australia';
  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Melbourne', 
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
