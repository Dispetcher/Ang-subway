import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milan',
  templateUrl: '../../../city/city.component.html',
  styleUrls: ['../../../city/city.component.scss']
})
export class MilanComponent implements OnInit {

  title:string = 'Milan';

  constructor() { }

  ngOnInit() {
  }

}
