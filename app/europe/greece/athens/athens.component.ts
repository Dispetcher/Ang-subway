import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-athens',
  templateUrl: './athens.component.html',
  styleUrls: ['./athens.component.scss']
})
export class AthensComponent implements OnInit {

  title:string = 'Athens';

  constructor() { }

  ngOnInit() {
  }

}
