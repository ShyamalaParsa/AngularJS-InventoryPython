angular.module("inventApp").controller("assigninventCtrl", function ($scope,$state,$http,$filter,myFactory) {

    var hdtext = angular.element(document.querySelector('#wel'));
    hdtext.addClass('hidden');  
//get call....
$scope.$on('$viewContentLoaded',function(){
    $scope.getEmployeeList();
    });
            $scope.maxSize = 5; 
            $scope.total_inventories = 0; 
            $scope.page = 1; 
            $scope.per_page = 10; 
    $scope.getEmployeeList = function () { 
        $http.get(x+"/allocatelist?page=" + $scope.page + "&count=" + $scope.per_page).then( 
        function (respons) { 
        $scope.invent_data = respons.data.response; 
        $scope.headers = Object.keys($scope.invent_data[0]);
        $scope.total_inventories = respons.data.total_inventories; 
    }, 
    function (err) { 
        var error = err; 
        }); 
    } 
//Loading employees list on first time 
    $scope.getEmployeeList(); 
            //This method is calling from pagination number 
            $scope.pageChanged = function () { 
            $scope.getEmployeeList(); 
            }; 
//This method is calling from dropDown 
    $scope.changePageSize = function () { 
    $scope.page = 1; 
    $scope.getEmployeeList(); 
    };
//directive for multidropdown........
    angular.module("inventApp").directive('multiselectDropdown', [function() {
        return function(scope, element, attributes) {
            
            element = $(element[0]);
            element.multiselect({
                enableFiltering : true,
                enableCaseInsensitiveFiltering: true,
                
            });
            scope.$watch(function () {
                return element[0].length;
            }, function () {
                element.multiselect('rebuild');
            });

            scope.$watch(attributes.product_model, function () {
                element.multiselect('refresh');
            });
        }
    }]); 
    $scope.entermessage = function(allocation_id) {
    $scope.all_id=allocation_id;
    };    
    $scope.reasonmessage = function(reason){
         $scope.deleteinvent = {
        allocation_id : $scope.all_id,
        reason:reason,
    }
        swal({
            title: "Are you sure Want to delete this inventory?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                myFactory.deleteinventory($scope.deleteinvent).then(function(data){
                    $scope.invent_data = data;
                })
            }
               else {
              swal("Your file is safe!");
            }
            $scope.entermessage = "";
            $state.transitionTo("Admin_home.Assigninventory",null,{'reload':true});
          });
        }
        });
