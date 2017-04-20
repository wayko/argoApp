(function(){
var app= angular.module('store-products', []);
app.directive('productTitle', function(){
	  return{
		 restrict: 'A',
		 templateUrl: 'product-title.html'
	  };
  });
  
  app.directive('productPanels',function(){
	 return{
		 restrict: 'E',
		 templateUrl: 'product-panel.html',
		 controller: function(){
			 this.tab = 1;
			this.setTab = function(newValue){
			this.tab = newValue;
			};
    this.isSet = function(checkTab){
     return this.tab === checkTab;
		 };
		 },
		 controllerAs: 'panels'
	 }; 
  });
  })();