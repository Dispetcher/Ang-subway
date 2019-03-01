import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-san-francisco',
  templateUrl: './san-francisco.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class SanFranciscoComponent implements OnInit {

  title:string = 'San Francisco, CA';

  constructor() { }

  ngOnInit() {
  }

}
