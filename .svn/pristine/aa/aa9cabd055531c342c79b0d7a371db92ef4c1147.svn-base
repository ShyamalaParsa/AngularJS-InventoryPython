angular.module("inventApp").controller("forgotpwdputCtrl",function($scope,$state,$stateParams,myFactory){
    $scope.Reset = function(){
        $scope.user.employeeId= $stateParams.employeeId;  
        $scope.user.password= $scope.user.password;   
        myFactory.resetPassword($scope.user).then(function(data){
                $scope.user = data; 
                swal("password updated successfully");        
        })
        $state.transitionTo("Home",null,{'reload':true}); 
    }

});