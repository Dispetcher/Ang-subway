import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcelona',
  templateUrl: './barcelona.component.html',
  styleUrls: ['./barcelona.component.scss']
})
export class BarcelonaComponent implements OnInit {

  title:string = 'Barcelona';

  constructor() { }

  ngOnInit() {
  }

}
