import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldUltra from '@amcharts/amcharts4-geodata/worldUltra';
import { regionsMap } from './regions-map';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../app.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit{

	@ViewChild('mapEl') mapEl:ElementRef;

	workColor:am4core.Color = am4core.color("#4b88bb");

  constructor(public el:ElementRef) {}

  ngOnInit() {
  	let headerH = 150;
  	let toolH = 64;
  	let paddings = 40;
  	let titleH = 58+48*2;

  	this.mapEl.nativeElement.style.height = document.body.scrollHeight - headerH - toolH - paddings - titleH + 'px';
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

  	/*Changing the color from chosen regions*/
  	polygons.data = regionsMap;

  	/*Configure regions*/
  	let polygonTemplate = polygons.mapPolygons.template;
  	polygonTemplate.tooltipText = "{name}";
  	polygonTemplate.fill = am4core.color("#7191a5");

  	/*Create a hover listener*/
  	let hoverState = polygonTemplate.states.create("hover");
  	hoverState.properties.fill = am4core.color("#85b9e4");


  }

}
