import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-los-angeles',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class LosAngelesComponent implements OnInit {

  title:string = 'Los Angeles, CA';
  
  constructor() { }

  ngOnInit() {
  }

}
