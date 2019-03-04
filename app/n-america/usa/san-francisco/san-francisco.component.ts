import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-san-francisco',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class SanFranciscoComponent implements OnInit {

  title:string = 'San Francisco, CA';

  constructor() { }

  ngOnInit() {
  }

}
