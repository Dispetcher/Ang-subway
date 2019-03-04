import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almaty',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class AlmatyComponent implements OnInit {

  title:string = 'Almaty';	

  constructor() { }

  ngOnInit() {
  }

}
