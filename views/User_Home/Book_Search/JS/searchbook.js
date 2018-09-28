angular.module("inventApp").controller('searchbookCtrl',function ($scope,$http,myFactory){
    var hdtext = angular.element(document.querySelector('#wel'));
    hdtext.addClass('hidden');
        //post api call......
       
    $http.get(x+"/booklist").then(function (respons) {
        $scope.BookDetailsdata = respons.data.response;
    });

    $scope.getYellowStars = function (num) {
        var numberOfStars = Math.round(num);
        if (numberOfStars > 5)  
            numberOfStars = 5;  
        var data = new Array(numberOfStars);  
        for (var i = 0; i < data.length; i++) {  
            data[i] = i;  
        }  
        return data;  
    }
    $scope.getGreyStars = function (num) {  
        var numberOfStars = Math.round(num);  
        var restStars = 5 - numberOfStars; 
        if (restStars > 0) {  
            var data = new Array(restStars);  
            for (var i = 0; i < data.length; i++) {  
                data[i] = i;  
            }  
            return data;  
        }  
    } 

    $scope.BooksViewdata = function(item){ 
            //readers get call here.....
                myFactory.bookreadersview(item).then(function(data){
                    $scope.bookreadersviewdata = data;
                    $scope.availblebooks = data.description.description;
                    $scope.desc = data.description.available;
                    $scope.reader = data.readers;
                    $scope.ratings = data.rating;
                    $scope.bookname = data.description.book_name;
                    $scope.bookId = data.book_id;
                    $scope.bookauthor = data.description.book_author;
                }),function(err){
                    if(err){
                        $scope.errorMessage = err;
                    }
                }
        }
      
    //request book code here.....
        $scope.requestbook = function(book_id){
            debugger;
                 $scope.reqdata = {
                    book_id : book_id,
                    employeeId : parseInt(sessionStorage.getItem("employeeId")),
                    status : "requested"
                }
            myFactory.searchbookrequest($scope.reqdata).then(function(data){
                $scope.BookDetailsdata = data;
                console.log($scope.BookDetailsdata);
                swal("Book Requested successfully")
            },function(err){
                if(err){
                    $scope.errorMessage = err;
                }
            })
        }
    });

    angular.module("inventApp").directive('ddTextCollapse', ['$compile', function($compile) {
        return {
            restrict: 'A',
            scope: true,
            link: function(scope, element, attrs) {
                /* start collapsed */
                scope.collapsed = false;
  
                /* create the function to toggle the collapse */
                scope.toggle = function() {
                    scope.collapsed = !scope.collapsed;
                };
  
                /* wait for changes on the text */
                attrs.$observe('ddTextCollapseText', function(text) {
  
                    /* get the length from the attributes */
                    var maxLength = scope.$eval(attrs.ddTextCollapseMaxLength);
  
                    if (text.length > maxLength) {
                        /* split the text in two parts, the first always showing */
                        var firstPart = String(text).substring(0, maxLength);
   
                        var secondPart = String(text).substring(maxLength, text.length);
                        /* create some new html elements to hold the separate info */
                        var firstSpan = $compile('<span>' + firstPart + '</span>')(scope);
                        var secondSpan = $compile('<span ng-if="collapsed">' + secondPart + '</span>')(scope);
                        var moreIndicatorSpan = $compile('<span ng-if="!collapsed">... </span>')(scope);
                        var lineBreak = $compile('<br ng-if="collapsed">')(scope);
                        var toggleButton = $compile('<span class="collapse-text-toggle" ng-click="toggle()">{{collapsed ? "Readless" : "Readmore"}}</span>')(scope);
  
  
                        /* remove the current contents of the element
                         and add the new ones we created */
                        element.empty();
                        element.append(firstSpan);
                        element.append(secondSpan);
                        element.append(moreIndicatorSpan);
                        element.append(lineBreak);
                        element.append(toggleButton);
                    }
                    else {
                        element.empty();
                        element.append(text);
                    }
                });
            }
        };
    }]);