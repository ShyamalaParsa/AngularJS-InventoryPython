angular.module("inventApp").controller("addbookCtrl", function ($scope,$http,$state,$stateParams,myFactory) {
    var hide_sidebar = angular.element(document.querySelector('#sidebartitle'));
    hide_sidebar.addClass('hidden').removeClass('empmodule');
    var hdtext = angular.element(document.querySelector('#wel'));
    hdtext.addClass('hidden');
    $scope.$on('$viewContentLoaded',function(){
    $scope.Addbookedit();
    $scope.items={};
    });
    $http({
        method: "GET",
        url: x+"/department"
        }).then(function inventSuccess(respons) {
        $scope.inventories = respons.data;
        $scope.invent_data = $scope.inventories.response;
        });
    //put call...
    $scope.item={};
    $scope.Addbookedit = function(){  
      
        myFactory.editbooks($stateParams.bookid).then(function(data){
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
        myFactory.updatebook($scope.item).then(function(data){
            $scope.item = data;
            swal("Books updated successfully")
            }).then(function(err){
                if(err){
                    $scope.errorMessage = err;
                }else{
                    $scope.errorMessage = err;
                } 
            })
         $state.transitionTo("Admin_home.Addbook",null,{'reload':true});
        }
});
