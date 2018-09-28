angular.module("inventApp").controller("addbookCtrl", function ($scope,$http,myFactory) {
    var hdtext = angular.element(document.querySelector('#wel'));
    var hide_sidebar = angular.element(document.querySelector('#sidebartitle'));
    hide_sidebar.addClass('hidden').removeClass('empmodule');
    hdtext.addClass('hidden');
    $scope.$on('$viewContentLoaded',function(){
        $scope.getEmployeeList();
        });
        $scope.maxSize = 5;      // Limit number for pagination display number.  
        $scope.total_books = 0;   // Total number of items in all pages. initialize as a zero  
        $scope.page = 1;    // Current page number. First page is 1.-->  
        $scope.per_page = 10;  // Maximum number of items per page.  
             
        $scope.getEmployeeList = function () { 
            $http.get(x+"/availablebooks?page=" + $scope.page + "&count=" + $scope.per_page).then( 
            function (respons) { 
            $scope.book = respons.data.response; 
            $scope.headers = Object.keys($scope.book[0]);
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
    });