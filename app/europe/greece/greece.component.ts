import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greece',
  templateUrl: './greece.component.html',
  styleUrls: ['../../app.component.scss']
})
export class GreeceComponent implements OnInit {

  title:string = 'Greece';
  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Athens', 
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
