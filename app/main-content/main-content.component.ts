import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatSidenav } from '@angular/material'; /*Has already imported in module file*/
import { RegionNode } from './region-node';
import { RegionsData } from './regions';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['../app.component.scss']
})

export class MainContentComponent implements OnInit, AfterViewInit {

	title:string = 'Main Content';
	treeControl = new NestedTreeControl<RegionNode>(node => node.children);
	dataSource = new MatTreeNestedDataSource<RegionNode>();
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  hasChild = (_:number, node: RegionNode) => !!node.children && node.children.length > 0;

  @ViewChild('drawer') drawer:MatSidenav;

  /*****************************/
  /*===========================*/
  /*****************************/
  constructor(private breakpointObserver: BreakpointObserver, private location: Location, public el:ElementRef) {
  	this.dataSource.data = RegionsData;
  }

  ngOnInit(){}

  ngAfterViewInit(){}

  /*Return to Home Page*/
  toHomePage(){
  	let loc = window.location;
  	window.location.href = loc.protocol + "//" + loc.host;
  }

  menuOpen(){
  	this.drawer.toggle();
  	let inkBarLeft = this.el.nativeElement.querySelector("mat-ink-bar").style.left;
  	inkBarLeft = inkBarLeft.replace('px','');
  	let drawerWidth = (this.drawer._width)/2;
  	if(this.drawer.opened){
  		this.el.nativeElement.querySelector("mat-ink-bar").style.left = ( parseInt(inkBarLeft) - drawerWidth) + 'px';
  	}else{
	 		this.el.nativeElement.querySelector("mat-ink-bar").style.left = ( parseInt(inkBarLeft) + drawerWidth) + 'px';
  	}
  }

}
