angular.module("inventApp").factory('AuthInterceptor', ['$log', '$state', '$q', function ($log, $state, $q) { 
    $log.debug('$log is here to show you that this is a regular factory with injection'); 
    
    var authInterceptor = { 
    request: function (config) { 
    var token = sessionStorage.getItem('token'); 
    if (token == null || token == "undefined") { 
    $state.go("Admin_login"); 
    } 
    else { 
    config.headers["Authorization"] = "bearer " + token; 
    } 
    return config; 
    }, 
    
    requestError: function (config) { 
    $state.go("Admin_login"); 
    return config; 
    }, 
    
    response: function (res) { 
    return res; 
    }, 
    
    responseError: function (res) { 
    if (res.status == "401") { 
    $state.go("Admin_login"); 
    } 
    if (res.status == "400") { 
    $state.go("Admin_login"); 
    } 
    if (res.status == "403") { 
    $state.go("Admin_login"); 
    } 
    if (res.status == "404") { 
    $state.go("Admin_login"); 
    } 
    $q.reject(res) 
    return res; 
    } 
    }; 
    
    return authInterceptor; 
    }]); 