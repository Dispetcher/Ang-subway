import { RegionNode } from './region-node'

export const RegionsData:RegionNode[] = [
	{	name: 'Asia',
		link: 'asia',
		children:[
			{	name: 'China',
				link: 'asia/china',
				children: [
					{	name: 'Hong Kong',
						link: 'asia/china/hong-kong'
					}
				]
			},
			{ name: 'Kazakhstan',
				link: 'asia/kazakhstan',
				children: [
					{ name: 'Almaty',
						link: 'asia/kazakhstan/almaty'
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
						link: 'europe/russia/st-petersburg',
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
		link: 'n-america',
		children: [
			{	name: 'Canada',
				link: 'n-america/canada',
				children: [
					{	name: 'Montreal',
						link: 'n-america/canada/montreal',
					},
					{	name: 'Toronto',
						link: 'n-america/canada/toronto',
					},
					{	name: 'Vancouver',
						link: 'n-america/canada/vancouver',
					}
				]
			},
			{	name: 'Mexico',
				link: 'n-america/mexico',
				children: [
					{	name: 'Mexico',
						link: 'n-america/mexico/mexico',
					}
				]
			},
			{	name: 'USA',
				link: 'n-america/usa',
				children: [
					{	name: 'Atlanta, GA',
						link: 'n-america/usa/atlanta'
					},
					{	name: 'Los Angeles, CA',
						link: 'n-america/usa/los-angeles'
					},
					{	name: 'Miami, FL',
						link: 'n-america/usa/miami'
					},
					{	name: 'New York, NY',
						link: 'n-america/usa/new-york'
					},
					{	name: 'San Francisco, CA',
						link: 'n-america/usa/san-francisco'
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