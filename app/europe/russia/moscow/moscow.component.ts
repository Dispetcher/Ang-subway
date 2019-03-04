import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moscow',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class MoscowComponent implements OnInit {

  title:string = 'Moscow';

  constructor() { }

  ngOnInit() {
  }

}
