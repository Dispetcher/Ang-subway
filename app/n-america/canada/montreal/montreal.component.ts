import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-montreal',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class MontrealComponent implements OnInit {

  title:string = 'Montreal';

  constructor() { }

  ngOnInit() {
  }

}
