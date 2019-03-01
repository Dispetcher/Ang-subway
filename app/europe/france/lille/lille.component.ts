import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lille',
  templateUrl: './lille.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class LilleComponent implements OnInit {

  title:string = 'Lille';

  constructor() { }

  ngOnInit() {
  }

}
