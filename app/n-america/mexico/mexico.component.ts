import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
  styleUrls: ['../../main-content/main-content.component.scss']
})
export class MexicoComponent implements OnInit {

  title:string = 'Mexico';
  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Mexico', 
  	  'cols': 2,
	 	  'img': {
	 	  	'src': '#'
  	  },
      link: 'mexico-city'
  	},
   	];
  }

  ngOnInit() {
  }

}
