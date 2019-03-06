import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldUltra from '@amcharts/amcharts4-geodata/worldUltra';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../app.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit{

	@ViewChild('mapEl') mapEl:ElementRef;

  constructor(public el:ElementRef) {}

  ngOnInit() {
  	this.mapEl.nativeElement.style.height = document.body.scrollHeight - 150 - 64 - 40 - 58 + 'px';
   }
  
  ngAfterViewInit(){
  	this.drawMap();  	
  }

  drawMap(){
  	var map = am4core.create('map', am4maps.MapChart); /*Create a blank div for map*/
  	map.geodata = am4geodata_worldUltra; /*High quality map*/
  	map.projection = new am4maps.projections.Miller(); /*Map type*/

  	/*Adding zoom control*/
  	map.zoomControl = new am4maps.ZoomControl();
  	map.zoomControl.slider.height = 85;

  	/*Create the polygons of regions*/  	
  	let polygons = map.series.push(new am4maps.MapPolygonSeries()); 
  	polygons.useGeodata = true; /*make map load polygon data from GoeJSON*/
  	polygons.exclude = ['AQ'];

  	/* Configure regions*/
  	let polygonTemplate = polygons.mapPolygons.template;
  	polygonTemplate.tooltipText = "{name}";
  	polygonTemplate.fill = am4core.color("#4b88bb");

  	/*Create a hover listener*/
  	let hoverState = polygonTemplate.states.create("hover");
  	hoverState.properties.fill = am4core.color("#85b9e4");


  }

}
