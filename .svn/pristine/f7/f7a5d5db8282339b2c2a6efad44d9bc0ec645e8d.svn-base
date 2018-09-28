angular.module("inventApp").controller("addinventCtrl", function($scope,$state,$stateParams,$http,$filter,myFactory){
var hide_welcome = angular.element(document.querySelector('#wel'));
hide_welcome.addClass('hidden').removeClass('welcome');
$scope.$on('$viewContentLoaded',function(){
    $scope.Addinventoryedit();
        $scope.items={};
    });
$http.get(x+"/productbrand").then(function (response) {
            $scope.ProductBrandData = response.data.brands;
        });
$http.get(x+"/vendoraddress").then(function (respons) {
            $scope.vendorAddressData = respons.data.response;
            });

$http.get(x+"/devicedetails").then(function (response) {
                $scope.DevicesDetailsData = response.data.devices;
            });
        //Edit code put method....
        $scope.item={};
        $scope.Addinventoryedit = function(){  
            myFactory.editinventories($stateParams.inventid).then(function(data){
                $scope.item = data.response[0];
            },function(err){
                if(err){
                    $scope.errorMessage = err;
                }
                else{
                    $scope.errorMessage = err;
                }
            })
        },
        $scope.update = function(){
            myFactory.updateinventory($scope.item).then(function(data){
                $scope.item = data;
                swal("Inventory Updated Successfully");
            }).then(function(err){
                if(err){
                    $scope.errorMessage = err;
                }else{
                    $scope.errorMessage = err;
                    } 
                })
            $state.transitionTo("Admin_home.Addinventory",null,{'reload':true});
        }
});