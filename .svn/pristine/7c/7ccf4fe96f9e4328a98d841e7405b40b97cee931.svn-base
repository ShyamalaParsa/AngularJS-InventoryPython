angular.module("inventApp").controller('addempctrl',function($scope,$http,$state,myFactory){
    var hdtext = angular.element(document.querySelector('#wel'));
    hdtext.addClass('hidden');
   
        $http({
            method: "GET",
            url: x+"/roles"
            }).then(function inventSuccess(respons) {
            $scope.userdata = respons.data;
            $scope.users =  $scope.userdata['roles'];    
            });
           $scope.today = function () {
                $scope.dt = new Date();
            };
            $scope.dateformat="MM/dd/yyyy";
            $scope.today();
            $scope.showcalendar = function ($event) {
                $scope.showdp = true;
            };
            $scope.showdp = false;        
            $scope.dtmax = new Date();

            var today = new Date();
            var dd = today.getDate();
            
            var mm = today.getMonth()+1; 
            var yyyy = today.getFullYear();
            if(dd<10) 
            {
                dd='0'+dd;
            } 
            
            if(mm<10) 
            {
                mm='0'+mm;
            } 
            
            today = mm+'/'+dd+'/'+yyyy;
            console.log(today);
            
    $scope.save = function(){
        myFactory.addnewemployee($scope.user).then(function(data){
            if(data.status=="Success"){
                $scope.employees_data = data;
                swal("Employee added Successfully");
            }
            else if(data.status=="Failed"){
                swal("EmployeeId already signed up");
            }
        })
        $state.transitionTo("Admin_home.employeeslist",null,{'reload':true}); 
    }

});

