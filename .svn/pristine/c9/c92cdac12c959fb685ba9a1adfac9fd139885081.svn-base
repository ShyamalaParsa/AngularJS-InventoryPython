angular.module("inventApp").controller("addinventCtrl1", function($scope,$http,myFactory,$state,$filter){
    var hide_welcome = angular.element(document.querySelector('#wel'));
    hide_welcome.addClass('hidden').removeClass('welcome');
    $scope.$on('$viewContentLoaded', function () {
        $scope.item={};
    })
    
    $(function(){
        $('input[name="tbrand"]').click(function(){
            var $radio = $(this);
               if($scope.namesofnewBrands == $scope.ProductBrandData[0].brandName){
                    $scope.message = "Hey! Buddy that brand is already exist.!"
                }
            
            if ($radio.data('waschecked') == true) 
            {
                $radio.prop('checked', false);
                $radio.data('waschecked', false);
                $scope.myVar = false;
                $scope.brand_name = function() {
                $scope.myVar = !$scope.myVar; 
                $('#brandselection').prop("disabled", false);
            };
            }
            else{
                $radio.data('waschecked', true);
            $('#brandselection').prop("disabled", true);
            }
        });
    });
   
    $(function(){
        $('input[name="tdevice"]').click(function(){
            var $radio = $(this);
            if ($radio.data('waschecked') == true) 
            {
                $radio.prop('checked', false);
                $radio.data('waschecked', false);
                $scope.myVar1 = false;
                $scope.device_Name = function() {
                $scope.myVar1 = !$scope.myVar1; 
                $('#deviceselection').prop("disabled", false);        
            };
            }
            else{
                $radio.data('waschecked', true);
                $('#deviceselection').prop("disabled", true); 
            }
        });
    });

    $(function(){
        $('input[name="tvendor"]').click(function(){
            var $radio = $(this);
            if ($radio.data('waschecked') == true) 
            {
                $radio.prop('checked', false);
                $radio.data('waschecked', false);
                $scope.myVar2 = false;
                $scope.vendor_name = function() {
                $scope.myVar2 = !$scope.myVar2; 
                $('#vendorselection').prop("disabled", false);
            };
            }
            else{
                $radio.data('waschecked', true);
                $('#vendorselection').prop("disabled", true);
            }
        });
    });
    $scope.vendorAddressData = [];
    //dropdown get call for address......
    $http.get(x+"/vendoraddress").then(function (respons) {
            $scope.vendorAddressData = respons.data.response;
            });
            $scope.DevicesDetailsData = [];
    $http.get(x+"/devicedetails").then(function (response) {
                $scope.DevicesDetailsData = response.data.devices;
            });
            $scope.ProductBrandData = [];
    $http.get(x+"/productbrand").then(function (response) {
                $scope.ProductBrandData = response.data.brands;
                $scope.namesofnewBrands = response.data.names;
            });

            $scope.today = function () {
                $scope.dt = new Date();
            };
            $scope.dateformat="MM/dd/yyyy";
            $scope.today();
            $scope.showcalendar1 = function ($event) {
                $scope.showdp = true;
            };
            $scope.showdp = false;        
            $scope.dtmax = new Date();
    //post call.... 
    $scope.saveUser = function(){
        $scope.item.purchase_date = $filter('date')($scope.item.purchase_date, "dd/MM/yyyy");
        myFactory.addinventory($scope.item).then(function(data){
            $scope.invent_data = data;
            swal("Inventory Added Successfully");
        },function(err){
            if(err){
                $scope.errorMessage = err;
            }
        })
        $state.transitionTo("Admin_home.Addinventory",null,{'reload':true});
    }
});
