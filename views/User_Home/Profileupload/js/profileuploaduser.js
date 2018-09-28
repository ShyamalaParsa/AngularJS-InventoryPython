angular.module("inventApp").controller("profileuploadCtrl",function($scope,$state,$http,$rootScope,myFactory){
    var hdtext = angular.element(document.querySelector('#wel'));
    hdtext.addClass('hidden');
   
       var empid=  sessionStorage.getItem("employeeId");
        $scope.uploadPic = function() {
            debugger;
            var formData = new FormData();
            var parms = $scope.picture;
            formData.append("employeeId",empid);
            formData.append("picture", parms);
            var t = parms.type.split('/').pop().toLowerCase();
            if (t != "jpeg" && t != "jpg" && t != "png" && t != "gif") {
                swal('Please select a valid image file');
                document.getElementById("img").value = '';
            }
           else{
           myFactory.uploadPropic(formData).then(function(data) {
                $scope.pic  = data;
                console.log($scope.pic);
                swal("profile_picture has been set successfully");
                $state.transitionTo("User_home",null,{'reload':true}); 
            }, function(err) {
                if (err) {
                    $scope.errorMessage = err;
                } else {
                    $scope.errorMessage = err;
                }
            })
        }
    }
    /*image code*/
    $scope.imageUploadFunc = function(event){
        var preview = document.getElementById('controller');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
                if (file) {
                    reader.readAsDataURL(file);
                }
                reader.addEventListener("load", function() {
                    preview.src = reader.result;
                    $rootScope.$broadcast('event', preview.src)
                }, false);
        
            }
});
angular.module("inventApp").directive('file', function() {
    return {
        require:"ngModel",
        restrict: 'A',
        link: function($scope, el, attrs, ngModel){
            el.bind('change', function(event){
                var files = event.target.files;
               var file = files[0];
  
           ngModel.$setViewValue(file);
                $scope.$apply();
            });
        } 
    };
  });