import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frankfurt',
  templateUrl: './frankfurt.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class FrankfurtComponent implements OnInit {
  
  title:string = 'Frankfurt';

  constructor() { }

  ngOnInit() {
  }

}
