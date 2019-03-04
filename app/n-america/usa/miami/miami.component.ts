import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miami',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class MiamiComponent implements OnInit {

  title:string = 'Miami, FL';

  constructor() { }

  ngOnInit() {
  }

}
