import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lille',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class LilleComponent implements OnInit {

  title:string = 'Lille';

  constructor() { }

  ngOnInit() {
  }

}
