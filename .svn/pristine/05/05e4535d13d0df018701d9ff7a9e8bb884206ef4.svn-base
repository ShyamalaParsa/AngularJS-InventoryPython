angular.module("inventApp").controller("assignbookCtrl", function ($scope,$state,$http,$filter,myFactory) {
    
        var hdtext = angular.element(document.querySelector('#wel'));
        hdtext.addClass('hidden');
        var hide_sidebar = angular.element(document.querySelector('#sidebartitle'));
        hide_sidebar.addClass('hidden').removeClass('empmodule');
//get call....
$scope.$on('$viewContentLoaded',function(){
    $scope.getEmployeeList();
    });
            $scope.maxSize = 5; 
            $scope.total_books = 0; 
            $scope.page = 1; 
            $scope.per_page = 10; 
    $scope.getEmployeeList = function () { 
        $http.get(x+"/assignbooks?page=" + $scope.page + "&count=" + $scope.per_page).then( 
        function (respons) { 
        $scope.invent_data = respons.data.response; 
        $scope.headers = Object.keys($scope.invent_data[0]);
        $scope.total_books = respons.data.total_books; 
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

//Granted code start here..... 
    $scope.myVar = false;
        $scope.dueDate_period = function(allocation_id) {
        $scope.all_id=allocation_id;
        $scope.myVar = !$scope.myVar;
    };
    $scope.granted = function(dueDate){
        $scope.grantbook = {
        status:"granted",
        allocation_id : $scope.all_id,
        dueDate:dueDate,
    }
    myFactory.statuscallsrequests($scope.grantbook).then(function(data){
        $scope.invent_data = data;
        swal("Book Granted successfully");
        },function(err){
        if(err){
                $scope.errorMessage = err;
        }
        else{
                $scope.errorMessage = err;
        }
                })
        $state.transitionTo("Admin_home.Assignbook",null,{'reload':true});
        }

// Declined code start here......
        $scope.myVar1 = false;
        $scope.message_display = function(allocation_id) {
                $scope.all_id_messages=allocation_id;
                $scope.myVar1 = !$scope.myVar1;
        };
        $scope.declined = function(message){
                $scope.grantbook = {
                status:"declined",
                allocation_id : $scope.all_id_messages,
                message:message
        }
        myFactory.statuscallsrequests($scope.grantbook).then(function(data){
                $scope.invent_data = data;
                swal("Book Declined successfully");
                },function(err){
                if(err){
                        $scope.errorMessage = err;
                }
                else{
                        $scope.errorMessage = err;
                }
                        })
                $state.transitionTo("Admin_home.Assignbook",null,{'reload':true});
                }


// Returned code start here......
        $scope.statuscall = function(allocation_id){
                $scope.grantbook = {
                status:"returned",
                allocation_id : allocation_id
        }
        myFactory.statuscallsrequests($scope.grantbook).then(function(data){
                $scope.invent_data = data;
                swal("Book Returned successfully");
                },function(err){
                if(err){
                        $scope.errorMessage = err;
                }
                else{
                        $scope.errorMessage = err;
                }
                        })
                $state.transitionTo("Admin_home.Assignbook",null,{'reload':true});
        }
});
