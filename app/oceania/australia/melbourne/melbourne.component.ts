import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-melbourne',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class MelbourneComponent implements OnInit {

  title:string = 'Melbourne';

  constructor() { }

  ngOnInit() {
  }

}
