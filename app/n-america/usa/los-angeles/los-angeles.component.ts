import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-los-angeles',
  templateUrl: './los-angeles.component.html',
  styleUrls: ['../../../app.component.scss']
})
export class LosAngelesComponent implements OnInit {

  title:string = 'Los Angeles, CA';
  
  constructor() { }

  ngOnInit() {
  }

}
