angular.module("inventApp").controller("setpwdCtrl",function($scope,$location,myFactory){
	
	change_back.addClass('background_homy').removeClass('background_home');
	var hide_welcome = angular.element(document.querySelector('#wel'));;
	hide_welcome.addClass('hidden').removeClass('welcome');
	$scope.save = function(){
		myFactory.updatepassword($scope.user).then(function(data){
				if($scope.user.password === $scope.user.cnfrmpwd){
					$scope.user = data;
					$location.path('/Home');
				}
				else{
					alert("passwords are mismatch");
				}
			})
		}
});