import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-york',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class NewYorkComponent implements OnInit {

  title:string = 'New York, NY';

  constructor() { }

  ngOnInit() {
  }

}
