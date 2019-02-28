import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kazakhstan',
  templateUrl: './kazakhstan.component.html',
  styleUrls: ['../../app.component.scss']
})
export class KazakhstanComponent implements OnInit {

  title:string = 'Kazakhstan';

  cities:Array<any>;
  
  constructor() {
  	this.cities = [
  	{ 'title': 'Almaty', 
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
