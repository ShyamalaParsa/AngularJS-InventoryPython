angular.module("inventApp").controller('userhomeCtrl',function($scope,$state,myFactory){
    var hide_welcome = angular.element( document.querySelector( '#wel' ) );
    hide_welcome.removeClass('hidden');
    change_back.removeClass("background_home").removeClass("background_homy");
    $scope.appname= sessionStorage.getItem('employeeName');
    $scope.name = sessionStorage.getItem("email");

    //profileget api call here.....

    $scope.id = sessionStorage.getItem("employeeId");
    myFactory.profilepic($scope.id).then(function(data){
        $scope.profile = data.profile_pic; 
    },function(err){
        if(err){
            $scope.errorMessage = err;
        }else{
            $scope.errorMessage = err;
        }
    })

    $scope.logout = function(){
         $scope.data =  sessionStorage.getItem("employeeName")
            myFactory.logoutdelete($scope.data).then(function(resp) {
                sessionStorage.clear();
                $state.transitionTo("Home",null,{'reload':true});           
                })
       
    }
    
    //Scroll button code here.......

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
