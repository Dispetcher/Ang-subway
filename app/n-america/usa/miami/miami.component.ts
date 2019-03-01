import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miami',
  templateUrl: './miami.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class MiamiComponent implements OnInit {

  title:string = 'Miami, FL';

  constructor() { }

  ngOnInit() {
  }

}
