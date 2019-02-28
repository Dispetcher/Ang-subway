import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-italy',
  templateUrl: './italy.component.html',
  styleUrls: ['../../app.component.scss']
})
export class ItalyComponent implements OnInit {

  title:string = 'Italy';
  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Milan', 
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
