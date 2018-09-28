angular.module("inventApp").controller("assigninventCtrledit", function ($scope,$state,$http,$stateParams,myFactory) {
    var hide_welcome = angular.element(document.querySelector('#wel'));
    hide_welcome.addClass('hidden').removeClass('welcome');
        $scope.$on('$viewContentLoaded',function(){
            $scope.Assigninventoryedit();
            $scope.items={};
            });
                //Edit code put method....
                $scope.invent={};
                $scope.invent1=[];
                
                $scope.Assigninventoryedit = function(){ 
                    myFactory.editassigninventories($stateParams.assigninventid).then(function(data){
                        $scope.invent_data = data.response;
                        $scope.invent1 = data.available;
                         for(i=0;i<$scope.invent1.length;i++){
                            var list = $scope.invent1[i];
                        }
                       
                    },function(err){
                        if(err){
                            $scope.errorMessage = err;
                        }
                        else{
                            $scope.errorMessage = err;
                        }
                    })
                }
                $scope.update = function(){
                    myFactory.updateassigninventory($scope.invent).then(function(data){
                        $scope.invent_data = data;
                        swal("Assigned Inventory Updated Successfully");
                    }).then(function(err){
                        if(err){
                            $scope.errorMessage = err;
                        }else{
                            $scope.errorMessage = err;
                        } 
                    })
                     $state.transitionTo("Admin_home.Assigninventory",null,{'reload':true});
             }
    });
    