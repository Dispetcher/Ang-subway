import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toronto',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class TorontoComponent implements OnInit {

  title:string = 'Toronto';

  constructor() { }

  ngOnInit() {
  }

}
