import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['../../app.component.scss']
})
export class SpainComponent implements OnInit {

  title:string = 'Spain';
  cities:Array<any>;
  
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
