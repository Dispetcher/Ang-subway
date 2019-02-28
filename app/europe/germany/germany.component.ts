import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-germany',
  templateUrl: './germany.component.html',
  styleUrls: ['../../app.component.scss']
})
export class GermanyComponent implements OnInit {

  title:string = 'Germany';
  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Frankfurt', 
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
