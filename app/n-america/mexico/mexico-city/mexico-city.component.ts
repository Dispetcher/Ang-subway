import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mexico-city',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class MexicoCityComponent implements OnInit {

  title:string = 'Mexico city';

  constructor() { }

  ngOnInit() {
  }

}
