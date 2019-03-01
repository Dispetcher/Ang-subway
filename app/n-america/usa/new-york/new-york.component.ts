import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-york',
  templateUrl: './new-york.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class NewYorkComponent implements OnInit {

  title:string = 'New York, NY';

  constructor() { }

  ngOnInit() {
  }

}
