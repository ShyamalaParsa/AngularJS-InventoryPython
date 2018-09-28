angular.module("inventApp").controller('viewprofile',function ($scope,myFactory){
    var hdtext = angular.element(document.querySelector('#wel'));
    hdtext.addClass('hidden');
    $scope.details = {
        employeeName :  sessionStorage.getItem("employeeName"),
        employeeId : sessionStorage.getItem("employeeId"),
        email : sessionStorage.getItem("email"),
        userid : sessionStorage.getItem("userid")
    }
    $scope.employeeId = sessionStorage.getItem("employeeId");
    myFactory.profilepic($scope.employeeId).then(function(data){
    $scope.profile = data.profile_pic; 
   
    },function(err){
    if(err){
    $scope.errorMessage = err;
    }else{
    $scope.errorMessage = err;
    }
    })
})