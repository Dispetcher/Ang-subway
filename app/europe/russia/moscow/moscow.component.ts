import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moscow',
  templateUrl: './moscow.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class MoscowComponent implements OnInit {

  title:string = 'Moscow';

  constructor() { }

  ngOnInit() {
  }

}
