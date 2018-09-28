angular.module("inventApp").service('myService',["$http","$q",function($http,$q){
    var x = "http://192.168.1.159:5000";
    return{
        //post api call for addemployee.....
            addnewemployee:function(user){
                var deferred = $q.defer();
                $http.post(x+'/adduser',user).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
        //employee delete method......
            employeedelete:function(employeeId){
                var deferred = $q.defer();
                $http.delete(x+'/relieveemployee/'+employeeId).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
        //put api call for newempolyee....
            updatepassword: function(user){
                var deferred = $q.defer();
                $http.put(x+'/adduser', user).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                return deferred.promise;
            },
        //login credentials for post.....
            loginpwd:function(user){
                var deferred = $q.defer();
                $http.post(x+'/login',user).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                return deferred.promise;
            },
        //forgot password for post.....
            forgotPassword:function(user){
                var deferred = $q.defer();
                $http.post(x+'/forgotpassword',user).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                return deferred.promise;
            },
        //changepassword post api.........
        changePassword:function(user){
                var deferred = $q.defer();
                $http.put(x+'/changepassword',user).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                return deferred.promise;
            },
        // resetPassword post api.....
            resetPassword:function(user){
                var deferred = $q.defer();
                $http.put(x+'/resetpassword?employeeId=',user).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                return deferred.promise;
            },
        //logout delete api.....
            logoutdelete:function(data){
                var deferred = $q.defer();
                $http.delete(x+'/logout/'+data).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
//........Addbooks calls here............// 

        //post api call for addbooks.....
            addbook: function(item){
                var deferred = $q.defer();
                $http.post(x+'/book',item).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
        //put api call for addbooks.....x
            editbooks: function(book){
                var bookdata = $q.defer();
                $http.get(x+'/book?book_id='+book).success(function(response){
                    bookdata.resolve(response);
                }).error(function(err){
                    bookdata.reject(err);
                })
                    return bookdata.promise;
            },
        //update for addbooks......
            updatebook: function(item){
                var deferred = $q.defer();
                $http.put(x+'/book', item).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
//........Inventory calls here...........//

        //post api call for (addinventory)add new inventory.....
        devicelist:function(devicelist1){
                var deferred = $q.defer();
                $http.get(x+"/profilepicture?employeeId="+devicelist1).success(function(response){
                    deferred.resolve(response); 
                }).error(function(err){
                    deferred.reject(err);
                })
                return deferred.promise;
            },
            addinventory: function(item){
                var inventory = $q.defer();
                $http.post(x+'/inventories',item).success(function(response){
                    inventory.resolve(response);
                }).error(function(err){
                    inventory.reject(err);
                })
                    return inventory.promise;
            },
        //put api call for addinventory.....
            editinventories: function(invent_data){
                var addinventdata = $q.defer();
                $http.get(x+"/inventories?inventory_id="+invent_data).success(function(response) {
                    addinventdata.resolve(response);
                }).error(function(err){
                    addinventdata.reject(err);
                })
                    return addinventdata.promise;
            },
        //update for addinventory.....
        updateinventory: function(item){
                var deferred = $q.defer();
                $http.put(x+'/inventories',item).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
        //delete method for addinventory....
            deleteaddinventory:function(inventory_id){
                var deferred = $q.defer();
                $http.delete(x+'/deleteinventory/'+inventory_id).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
//.......Assign Inventory calls here........//

        //post api call for (assignitem)assign a new inventory...
            assigninventory: function(invent){
                var assigninvent = $q.defer();
                $http.post(x+'/allocate',invent).success(function(response){
                    assigninvent.resolve(response);
                }).error(function(err){
                    assigninvent.reject(err);
                })
                    return assigninvent.promise;
            },
        //put api call for assigninventory....
            editassigninventories: function(allocation_id){
                var assigninventdata = $q.defer();
                $http.get(x+"/allocate?allocation_id="+allocation_id).success(function(data) {
                    assigninventdata.resolve(data);
                }).error(function(err){
                    assigninventdata.reject(err);
                })
                    return assigninventdata.promise;
            },
        //update method for assigninventory.....
            updateassigninventory: function(invent){
                var deferred = $q.defer();
                $http.put(x+'/allocate',invent).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
        //delete method for assigninventory.....
            deleteinventory:function(allocation_id){
                var deferred = $q.defer();
                $http.delete(x+'/deleteallocation/'+allocation_id).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
//.......Assign Books calls here..........//

        //put call for assignbook(bookallocatelist)
            statuscallsrequests:function(grantbook){
                var deferred = $q.defer();
                $http.put(x+"/assignbooks",grantbook).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
                    
            },
//......My Inventories calls here........//
        
        //request replace put call here.....
            statusreplacerequests : function(request_invent){
                var reqinvent = $q.defer();
                $http.put(x+"/replace",request_invent).success(function(response){
                    reqinvent.resolve(response); 
                }).error(function(err){
                    reqinvent.reject(err);
                })
                return reqinvent.promise;
            },
//......BookSearch calls here..........//

        //booksearch and request post api.....
        bookreadersview: function(book_id){
                var deferred = $q.defer();
                $http.get(x+"/readers?book_id="+book_id).success(function(response) {
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
        //alloted devices get call here.....
            alloteddevice: function(deviceId){
                var deferred = $q.defer();
                $http.get(x+"/alloted?deviceId="+deviceId).success(function(response) {
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
        //available devices get call here.....
            availabledevice:function(deviceId){
                var deferred = $q.defer();
                $http.get(x+"/available?deviceId="+deviceId).success(function(response) {
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            }, 
            myinventory: function(reasonsdata){
                var deferred = $q.defer();
                $http.put(x+'/replace',reasonsdata).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                    return deferred.promise;
            },
        //Bookrequest post call here....
            searchbookrequest: function(reqdata){
                var deferred = $q.defer();
                $http.post(x+"/requestbook",reqdata).success(function(response){
                    deferred.resolve(response);
                }).error(function(err){
                    deferred.reject(err);
                })
                return deferred.promise; 
            },
        //book rating put call here.......
            bookrating: function(ratereq){
                var deferred = $q.defer();
                $http.put(x+'/readers',ratereq).success(function(response){
                deferred.resolve(response);
                }).error(function(err){
                deferred.reject(err);
                })
                return deferred.promise;
                },
         //upload profile picture
         uploadPropic:function(formData){
            var deferred = $q.defer();
            var img = {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined }
            }
            $http.put(x+"/profilepicture",formData,img).success(function(response){
                deferred.resolve(response); 
            }).error(function(err){
                deferred.reject(err);
            })
            return deferred.promise;    
        },
        //profile pic get
        profilepic:function(employeeId){
            var deferred = $q.defer();
            $http.get(x+"/profilepicture?employeeId="+employeeId).success(function(response){
                deferred.resolve(response); 
            }).error(function(err){
                deferred.reject(err);
            })
            return deferred.promise;
        }
}
}]);