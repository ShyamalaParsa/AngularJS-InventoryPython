angular.module("inventApp").controller('dashboardCtrl',function($scope,$http,myFactory){
    var hide_welcome = angular.element( document.querySelector( '#wel' ) );
    hide_welcome.removeClass('hidden');
    change_back.removeClass("background_home").removeClass("background_homy");
    $scope.list1=[];
    $http({
        method: "GET",
        url: x+"/inventorydetails"
        }).then(function inventSuccess(resp) {
            $scope.list1 = resp.data.totalInventory;
            for(i=0;i<$scope.list1.length;i++){
                var ln = $scope.list1[i].deviceName;
                }
     });
   $scope.allotedevice = function(list){
       myFactory.alloteddevice(list).then(function(data){
        $scope.allotedata = data.Alloted;
        for(i=0;i<$scope.allotedata.length;i++){
            var ln1 = $scope.allotedata[i].assetId;
            }
    }),function(err){
        if(err){
            $scope.errorMessage = err;
        }
    }
}
$scope.availabledevice = function(list){
    myFactory.availabledevice(list).then(function(data){
     $scope.availabledata = data.available;
     for(i=0;i<$scope.availabledata.length;i++){
         var ln1 = $scope.availabledata[i].assetId;
         }
 }),function(err){
     if(err){
         $scope.errorMessage = err;
     }
 }
}

})