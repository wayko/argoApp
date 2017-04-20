(function(){
var apps = angular.module('headers', []);
apps.controller("HeaderController", function(){
	this.items = headerItems;
 });
 
  var headerItems = [
 {
	 
	 companyLogo:  'images/blog.png',
	 companyMoto: "We Kick ass so you don't have to!"
	 
 },
 {
	 companyLogo:  'images/blog.png',
	 companyMoto: "We got our ass kicked!!!"
 }
 ];
 })();