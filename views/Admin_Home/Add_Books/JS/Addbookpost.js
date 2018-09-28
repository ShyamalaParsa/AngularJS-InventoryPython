angular.module("inventApp").controller("addbookCtrl1", function ($scope,$http,myFactory,$state) {
    var hdtext = angular.element(document.querySelector('#wel'));
    hdtext.addClass('hidden');
    var hide_sidebar = angular.element(document.querySelector('#sidebartitle'));
    hide_sidebar.addClass('hidden').removeClass('empmodule');
    $scope.$on('$viewContentLoaded', function () {
        $scope.item={};
        })
        //get call for department....
        $http({
            method: "GET",
            url: x+"/department"
            }).then(function inventSuccess(respons) {
            $scope.invent_data = respons.data.response;
            });
            $(function(){
                $('input[name="tdept"]').click(function(){
                    var $radio = $(this);
                    if ($radio.data('waschecked') == true) 
                    {
                        $radio.prop('checked', false);
                        $radio.data('waschecked', false);
                        $scope.myVar1 = false;
                        $scope.dept_name = function() {
                        $scope.myVar1 = !$scope.myVar1; 
                        $('#departmentselection').prop("disabled", false); 
                    
                    };
                    }
                    else{
                        $radio.data('waschecked', true);
                    $('#departmentselection').prop("disabled", true);
                    }
                });
            });
  
$scope.save = function(){
    myFactory.addbook($scope.item).then(function(data){
        $scope.aaaa = data;
        swal("books added successfully");
    },function(err){
        if(err){
            $scope.errorMessage = err;
        }
    })
     $state.transitionTo("Admin_home.Addbook",null,{'reload':true});
}
});