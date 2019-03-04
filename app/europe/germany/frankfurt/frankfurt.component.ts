import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frankfurt',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class FrankfurtComponent implements OnInit {
  
  title:string = 'Frankfurt';

  constructor() { }

  ngOnInit() {
  }

}
