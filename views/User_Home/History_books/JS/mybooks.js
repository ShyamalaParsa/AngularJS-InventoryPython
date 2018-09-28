angular.module("inventApp").controller('mybookctrl',function ($scope,$http,myFactory){
    var hdtext = angular.element(document.querySelector('#wel'));
    hdtext.addClass('hidden');
    $scope.$on('$viewContentLoaded',function(){
        $scope.getEmployeeList();
        });
                $scope.maxSize = 5; 
                $scope.total_books = 0; 
                $scope.page = 1; 
                $scope.per_page = 10; 
        $scope.getEmployeeList = function () { 
            $http.get(x+"/mybooks?page=" + $scope.page + "&count=" + $scope.per_page + "&employeeId=" + sessionStorage.getItem("employeeId")).then( 
            function (respons) { 
            $scope.mybooks = respons.data.response;
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
       $scope.returnrate = function(allocation_id){        
                $scope.rate_id = allocation_id;
       }
        $scope.maxRating = 5;
        $scope.ratedBy = 0;
        $scope.rateBy = function (star) {
                $scope.ratedBy = star;
            }
          
        $scope.rateClick = function(rating) { 
            debugger
                $scope.ratereq = {
                    allocation_id : $scope.rate_id,
                    rating : $scope.ratedBy,
                    status : "returned"
                }
                console.log($scope.ratereq);
            myFactory.bookrating($scope.ratereq).then(function(data){
                $scope.mybooks = data;
                console.log($scope.mybooks);
                swal("book rated successfully");
                $scope.ratedBy="";
            }),function(err){
                if(err){
                    $scope.errorMessage = err;
                }
            }
             
        }    

});
