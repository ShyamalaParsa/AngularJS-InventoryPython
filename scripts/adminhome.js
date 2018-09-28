angular.module("inventApp").controller('adminhomeCtrl',function($scope,$state,myFactory,$http){
    var hide_welcome = angular.element( document.querySelector( '#wel' ) );
    hide_welcome.removeClass('hidden');
    change_back.removeClass("background_home").removeClass("background_homy");
    $scope.appname= sessionStorage.getItem('employeeName');
    $scope.email= sessionStorage.getItem('email');
  
    $scope.logout = function(){
        $scope.data =  sessionStorage.getItem("employeeName")
            myFactory.logoutdelete($scope.data).then(function(resp) {
                sessionStorage.clear();
                $state.transitionTo("Home",null,{'reload':true});              
                })
    
            }
            
            $scope.employeeId = sessionStorage.getItem("employeeId");
            myFactory.profilepic($scope.employeeId).then(function(data){
            $scope.profile = data.profile_pic; 
           
            },function(err){
            if(err){
            $scope.errorMessage = err;
            }else{
            $scope.errorMessage = err;
            }
            })
            $(function(){
                
                   $(document).on( 'scroll', function(){
                
                       if ($(window).scrollTop() > 100) {
                           $('.scroll-top-wrapper').addClass('show');
                       } else {
                           $('.scroll-top-wrapper').removeClass('show');
                       }
                   });
                
                   $('.scroll-top-wrapper').on('click', scrollToTop);
               });
                
               function scrollToTop() {
                   verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
                   element = $('body');
                   offset = element.offset();
                   offsetTop = offset.top;
                   $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
               }

});