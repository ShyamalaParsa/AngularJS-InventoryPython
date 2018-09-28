   angular.module("inventApp").controller('adminloginCtrl',function adminloginCtrl($scope,$http,$state,myFactory) { 
    change_back.addClass('background_homy').removeClass('background_home');
    
        var hdtext = angular.element(document.querySelector('#wel'));
        hdtext.addClass('hidden');
    $http({
        method: "GET",
        url: x+"/roles"
        }).then(function inventSuccess(respons) {
        $scope.userdata = respons.data;
        $scope.users =  $scope.userdata['roles']; 
        });
             $(".toggle-password").click(function() {
                $(this).toggleClass("fa-eye fa-eye-slash");
                    var input = $($(this).attr("toggle"));
                    if (input.attr("type") == "password") {
                        input.attr("type", "text");
                    } else {
                        input.attr("type", "password");
                    }
                    });

            $scope.user = {};
            $scope.userid = ""; 
            $scope.password = "";
            $scope.role_id = "";
            $scope.isAuthenticated = true; 

          
    $scope.loggedIn = function () {
        $scope.user.userid= $scope.userid,
        $scope.user.password= $scope.password;
        $scope.user.role_id = $scope.users[0].role_id;

if ($scope.user.userid == "" && $scope.user.password == "") { 
    $scope.isAuthenticated = false; 
    $state.go("Admin_login"); 
} 
else { 
     myFactory.loginpwd($scope.user).then(function (resp) { 
        if (resp.response != null) { 
            if (resp.status == "incorrect password") {
                swal(resp.status); 
                $scope.isAuthenticated = false; 
                $state.go('Admin_login');
                }
                else if(resp.status == "Username or Password is incorrect"){
                    swal(resp.status); 
                    $scope.isAuthenticated = false; 
                    $state.go('Admin_login');
                }
            else {
                $scope.isAuthenticated = true; 
                sessionStorage.setItem('userid', $scope.userid) 
                sessionStorage.setItem('token', resp.token)
                sessionStorage.setItem('email',resp.response[0].email);
                sessionStorage.setItem('employeeId',resp.response[0].employeeId);
                sessionStorage.setItem('employeeName',resp.response[0].employeeName);
                $state.transitionTo("Admin_home.dashboard",null,{'reload':true});   
                } 
        }    
        else { 
            $scope.isAuthenticated = false;       
            $state.go("Admin_login"); 
        } 
    },function () { 
        $scope.isAuthenticated = false; 
        $state.go("Admin_login"); 
        }, function () { 
            $scope.isAuthenticated = false; 
            $state.go("Admin_login"); 
            }); 
}  
    }; 
  
});
 
 
   