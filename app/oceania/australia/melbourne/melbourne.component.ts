import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-melbourne',
  templateUrl: './melbourne.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class MelbourneComponent implements OnInit {

  title:string = 'Melbourne';

  constructor() { }

  ngOnInit() {
  }

}
