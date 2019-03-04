import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-atlanta',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class AtlantaComponent implements OnInit, OnChanges {

  title:string = 'Atlanta, GA';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  	
  }

}
