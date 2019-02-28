import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface RegionNode {
	name: string;
	link: string;
	children?: RegionNode[];
}

const RegionData:RegionNode[] = [
	{	name: 'Asia',
		link: 'asia',
		children:[
			{	name: 'China',
				link: 'asia/china',
				children: [
					{	name: 'Hong Kong',
						link: 'asia/china/hong_kong'
					}
				]
			},
			{ name: 'Kazakhstan',
				link: 'asia/kazakhstan',
				children: [
					{ name: 'Almaty',
						link: 'asia/kazahstan/almaty'
					}
				]
			}
		]
	},
	{ name: 'Europe',
	  link: 'europe',
		children: [
			{	name: 'France',
				link: 'europe/france',
				children: [
					{	name: 'Lille',
						link: 'europe/france/lille'
					}
				]
			},
			{	name: 'Germany',
				link: 'europe/germany',
				children: [
					{	name: 'Frankfurt',
						link: 'europe/germany/frankfurt'
					}
				]
			},
			{	name: 'Greece',
				link: 'europe/greece',
				children: [
					{	name: 'Athens',
						link: 'europe/greece/athens'
					}
				]
			},
			{	name: 'Italy',
				link: 'europe/italy',
				children: [
					{	name: 'Milan',
						link: 'europe/italy/milan'
					}
				]
			},
			{ name: 'Russia',
				link: 'europe/russia',
				children: [
					{	name: 'Moscow',
						link: 'europe/russia/moscow',
				  },
				  {	name: 'St. Petersburg',
						link: 'europe/russia/st_petersburg',
					}
				]
			},
			{ name: 'Spain',
				link: 'europe/spain',
				children: [
					{	name: 'Barcelona',
						link: 'europe/spain/barcelona'
					}
				]
			}			
		]
	},
	{	name: 'N.America',
		link: 'n.america',
		children: [
			{	name: 'Canada',
				link: 'n.america/canada',
				children: [
					{	name: 'Montreal',
						link: 'n.america/canada/montreal',
					},
					{	name: 'Toronto',
						link: 'n.america/canada/toronto',
					},
					{	name: 'Vancouver',
						link: 'n.america/canada/vancouver',
					}
				]
			},
			{	name: 'Mexico',
				link: 'n.america/mexico',
				children: [
					{	name: 'Mexico',
						link: 'n.america/mexico/mexico',
					}
				]
			},
			{	name: 'USA',
				link: 'n.america/usa',
				children: [
					{	name: 'Atlanta, GA',
						link: 'n.america/usa/atlanta'
					},
					{	name: 'Los Angeles, CA',
						link: 'n.america/usa/los_angeles'
					},
					{	name: 'Miami, FL',
						link: 'n.america/usa/los_angeles'
					},
					{	name: 'New York, NY',
						link: 'n.america/usa/new_york'
					},
					{	name: 'San Francisco, CA',
						link: 'n.america/usa/san_francisco'
					}
				]
			}			
		]
	},
	{	name: 'Oceania',
		link: 'oceania',
		children: [
			{	name: 'Australia',
				link: 'oceania/australia',
				children: [
					{	name: 'Melbourne',
					link: 'oceania/australia/melbourne'
				  }
				]
			}
		]
	}	
];

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

  /*****************************/
  /*===========================*/
  /*****************************/
  constructor(private breakpointObserver: BreakpointObserver, private location: Location, public el:ElementRef) {
  	this.dataSource.data = RegionData;
  }

  ngOnInit(){}

  ngAfterViewInit(){}

  /*Return to Home Page*/
  toHomePage(){
  	let loc = window.location;
  	window.location.href = loc.protocol + "//" + loc.host;
  }

}
