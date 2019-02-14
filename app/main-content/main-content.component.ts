import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface RegionNode {
	name: string;
	children?: RegionNode[];
}

const RegionData:RegionNode[] = [
	{
		name: 'N.America',
		children: [
			{	name: 'USA',
				children: [
					{	name: 'New York'},
					{	name: 'Atlanta'}
				]
			},
			{	name: 'Canada',
				children: [
					{	name: 'Ontario'},
					{	name: 'Toronto'}
				]
			}
		]
	},
	{ name: 'Europe',
		children: [
			{	name: 'England'},
			{	name: 'Germany'},
			{	name: 'France'},
			{ name: 'Spain'},
			{ name: 'Russia',
				children: [
					{	name: 'St Petersburg'},
					{	name: 'Moscow'}
				]
			}
		]
	},
	{	name: 'Asia',
		children:[
			{	name: 'China'},
			{ name: 'Kazahstan'}
		]
	}
];

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent {

	treeControl = new NestedTreeControl<RegionNode>(node => node.children);
	dataSource = new MatTreeNestedDataSource<RegionNode>();
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  hasChild = (_:number, node: RegionNode) => !!node.children && node.children.length > 0;

  constructor(private breakpointObserver: BreakpointObserver) {
  	this.dataSource.data = RegionData;
  }

}
