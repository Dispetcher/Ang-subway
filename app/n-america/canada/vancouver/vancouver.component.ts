import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vancouver',
  templateUrl: './vancouver.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class VancouverComponent implements OnInit {

  title:string = 'Vancouver';

  constructor() { }

  ngOnInit() {
  }

}
