import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toronto',
  templateUrl: './toronto.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class TorontoComponent implements OnInit {

  title:string = 'Toronto';

  constructor() { }

  ngOnInit() {
  }

}
