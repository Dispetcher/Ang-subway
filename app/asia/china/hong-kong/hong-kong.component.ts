import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hong-kong',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class HongKongComponent implements OnInit {

  title:string = 'Hong Kong';

  constructor() { }

  ngOnInit() {
  }

}
