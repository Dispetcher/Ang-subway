import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlanta',
  templateUrl: './atlanta.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class AtlantaComponent implements OnInit {

  title:string = 'Atlanta, GA';

  constructor() { }

  ngOnInit() {
  }

}
