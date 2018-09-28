angular.module("inventApp").controller("forgotpasswordctrl",function($scope,myFactory,$http){
    $scope.info = "";  
    $http({
        method: "GET",
        url: x+"/roles"
        }).then(function inventSuccess(respons) {
        $scope.userdata = respons.data;
        $scope.users =  $scope.userdata['roles'];
        });     
       $scope.validate = function(){
        $scope.user.email= $scope.user.email, 
        $scope.user.role_id =  $scope.users[0].role_id;
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