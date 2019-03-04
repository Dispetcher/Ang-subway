import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-athens',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class AthensComponent implements OnInit {

  title:string = 'Athens';

  constructor() { }

  ngOnInit() {
  }

}
