import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vancouver',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class VancouverComponent implements OnInit {

  title:string = 'Vancouver';

  constructor() { }

  ngOnInit() {
  }

}
