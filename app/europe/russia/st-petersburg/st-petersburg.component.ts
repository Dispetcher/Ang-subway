import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-st-petersburg',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class StPetersburgComponent implements OnInit {

  title:string = 'Saint Petersburg';

  constructor() { }

  ngOnInit() {
  }

}
