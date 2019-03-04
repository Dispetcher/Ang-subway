import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcelona',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class BarcelonaComponent implements OnInit {

  title:string = 'Barcelona';

  constructor() { }

  ngOnInit() {
  }

}
