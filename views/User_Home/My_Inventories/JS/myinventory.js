angular.module("inventApp").controller("invtrqstCtrl", function($scope,$state,$http,myFactory){
    var hide_welcome = angular.element( document.querySelector( '#wel' ) );
		hide_welcome.addClass('hidden');
		change_back.removeClass("background_home").removeClass("background_homy");
//get call for inventorylist..... 
			$http.get(x+"/myinventory?employeeId=" + sessionStorage.getItem('employeeId')).then( 
			function (respons) { 
			$scope.invent_data = respons.data.response;
	       })


			$scope.myVar1 = false;
			$scope.request_replacement = function(allocation_id) {
					$scope.all_id_messages=allocation_id;
					$scope.myVar1 = !$scope.myVar1;
			};
			$scope.requstedinventory = function(message){
					$scope.request_invent = {
						status:"requested",
						allocation_id : $scope.all_id_messages,
						message:message,
						
				}
				myFactory.statusreplacerequests($scope.request_invent).then(function(data){
					$scope.invent_data = data;
					swal("Inventory Requested successfully");
					},function(err){
					if(err){
							$scope.errorMessage = err;
					}
					else{
							$scope.errorMessage = err;
					}
							})
					$state.transitionTo("User_home.myinventory",null,{'reload':true});
					}
});