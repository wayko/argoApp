(function(){
var app = angular.module('store',['store-products']);
app.controller('StoreController', function(){
this.products = gems;
});

var gems =[ 
{
	name: 'Dodecahedron',
	price: 2.95,
	description: '.....',
	canPurchase: false,
	soldOut: false,
	images:[
		'images/blog.png',
		'images/bronze.png'
	],
	reviews:[
	{
		
	}
	]
},

{
	name: 'Pentagon Gem',
	price: 5.00,
	description: '.....',
	canPurchase:true,
	soldOut: false,
		images:[
		'images/blog.png',
		'images/bronze.png'
	],
	reviews:[
	{
		stars: 5,
		body: "I love this product",
		author: "joe@someemail.com"
	}
	]
},

{
	name: 'Cube',
	price: 2.95,
	description: '.....',
	canPurchase: true,
	soldOut: false,
		images:[
		'images/blog.png',
		'images/bronze.png'
	],
	reviews:[
	{
		
	}
	]
}
];

  app.controller('GalleryController',['$log', function($log){
		var currents = this;
	currents.current = 0;
		currents.setCurrent = function(currentImg)
		{	
			
			currents.current = currentImg || 0;
			
		};
		currents.$log = $log;
		currents.message;
  }]);
  app.controller('ReviewController', function(){
	 this.review=[]; 
	 this.addReview = function(product){
		product.reviews.push(this.review); 
		this.review = [];
	 };
  });
  
})();