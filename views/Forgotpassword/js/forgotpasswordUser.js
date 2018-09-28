angular.module("inventApp").controller("forgotpasswordUserctrl",function($http,$scope,myFactory){
    $scope.info = "";
    $http({
        method: "GET",
        url: x+"/roles"
        }).then(function inventSuccess(respons) {
        $scope.userdata = respons.data;
        $scope.users =  $scope.userdata['roles'];
        });     
       $scope.Uservalidate = function(){
        $scope.user.email= $scope.user.email, 
        $scope.user.role_id =  $scope.users[1].role_id;
        myFactory.forgotPassword($scope.user).then(function(data){
                $scope.aaaa = data;
                $scope.info = "check your email and go through the link";
                $scope.user = "";
            },function(err){
                if(err){
                    $scope.errorMessage = err;
                }
            })      
       } 
})