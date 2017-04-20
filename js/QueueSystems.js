(function(){
var app= angular.module('queue-system', []);
	app.controller("NavController", function(){
		this.navigations = navItems;
	});
		var navItems = [
		{
			name: "CVO",
			location: "http://localhost/cvo.html"
		},
		{
			name: "Financial Aid",
			location: "http://localhost/FinancialAid.html"
		},
		{
			name: "Student Loan Services",
			location: "http://localhost/StudentLoanServ.html"
		},
		{
			name: "Student Queue",
			location: "http://localhost/Queueoutput.html"
		}
	];
	
	app.controller("FACounController",['$scope','$http', function($scope,$http){
			
		var dataRes = $http.get("counsoler.php");
		dataRes.success(function(data){
			$scope.counsolers = data;
		});
	}]);
		
		app.controller("StudentTypeController", function(){
			
		});
  })();