angular.module("inventApp").controller("assigninventCtrl1", function ($scope,$state,$http,$timeout,$filter,myFactory) {
    
        var hdtext = angular.element(document.querySelector('#wel'));
        hdtext.addClass('hidden');
    //         $scope.maxSize = 5;      // Limit number for pagination display number.  
    //         $scope.total_employees = 0;   // Total number of items in all pages. initialize as a zero  
    //         $scope.page = 1;    // Current page number. First page is 1.-->  
    //         $scope.per_page = 10;  // Maximum number of items per page.  
                 
    //         $scope.getEmployeeList = function () { 
    //             $http.get(x+"/adduser?page=" + $scope.page + "&count=" + $scope.per_page).then( 
    //             function (respons) { 
    //                 $scope.employees_data = respons.data.response;
    //                 console.log($scope.employees_data);
    //                 var n = $scope.employees_data.length;
    //                 for(i=0;i<n;i++){
    //                     $scope.myempid = $scope.employees_data[i].employeeId;
    //                     console.log($scope.myempid);
    //                     $scope.myempname = $scope.employees_data[i].employeeName;
    //                     console.log($scope.myempname);
    //                     if($scope.myempid=="" && $scope.myempname==""){
    //                         console.log($scope.myempname);
    //                     }
    //                 }  
    //                 $scope.total_employees = respons.data.total_employees; 
    //         }, 
    //         function (err) { 
    //             var error = err; 
    //             }); 
    //         } 
    // //Loading employees list on first time 
    //         $scope.getEmployeeList(); 
    //                 //This method is calling from pagination number 
    //                 $scope.pageChanged = function () { 
    //                 $scope.getEmployeeList(); 
    //                 }; 
    // //This method is calling from dropDown 
    //         $scope.changePageSize = function () { 
    //         $scope.page = 1; 
    //         $scope.getEmployeeList(); 
    //         };
                //get call for devicenamelist....
                $http({
                    method: "GET",
                    url: x+"/devicelist"
                    }).then(function inventSuccess(respons) {
                    $scope.inventories = respons.data;
                    $scope.invent_data = $scope.inventories.available;               
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
            //Post api call for assigninventory....
     $scope.save = function(){
         $scope.invent.dateAssigned = $filter('date')($scope.invent.dateAssigned, "MM/dd/yyyy");
         myFactory.assigninventory($scope.invent).then(function(data){
             $scope.aaaa = data;
             swal("Inventory Assigned successfully")
         },function(err){
             if(err){
                 $scope.errorMessage = err;
             }
         })
         $state.transitionTo("Admin_home.Assigninventory",null,{'reload':true});
     }
    });
    