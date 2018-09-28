angular.module("inventApp").controller("addinventCtrl", function($state,$scope,$http,myFactory){

    var hide_welcome = angular.element(document.querySelector('#wel'));
    hide_welcome.addClass('hidden').removeClass('welcome');
    $scope.$on('$viewContentLoaded',function(){
        $scope.getEmployeeList();
    });
                $scope.maxSize = 5; 
                $scope.total_inventories = 0; 
                $scope.page = 1; 
                $scope.per_page = 10; 
        $scope.getEmployeeList = function () { 
            $http.get(x+"/inventory?page=" + $scope.page + "&count=" + $scope.per_page).then( 
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
     //delete model code....
             $scope.delete = function(item){
                    swal({
                        title: "Are you sure?",
                        text: "Once you deleted, you will not be able to recover this file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      })
                      .then((willDelete) => {
                        if (willDelete) {
                            myFactory.deleteaddinventory(item).then(function(data){
                                $scope.item = data;
                            })
                        }
                        else {
                          swal("Your file is safe!");
                        }
                        $state.transitionTo("Admin_home.Addinventory",null,{'reload':true});
                      });
                    }
});
