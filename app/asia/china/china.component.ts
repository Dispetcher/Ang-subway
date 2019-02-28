import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-china',
  templateUrl: './china.component.html',
  styleUrls: ['../../app.component.scss']
})
export class ChinaComponent implements OnInit {

  title:string = 'China';
  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Hong Kong', 
  	  'cols': 2,
	 	  'img': {
	 	  	'src': '#'
  	  },
  	}
  	];
  }

  ngOnInit() {
  }

}
