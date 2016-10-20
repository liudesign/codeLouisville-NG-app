angular.module("todoListApp", [])
.controller('mainCTRL', function($scope){
	$scope.helloWorld = function(){
		console.log("Hello there. This is the helloWorld controller function, in the mainCtrl!");
	};
});