define(['app'], function (app) {
    app.factory('ShoppingService', ShoppingService);
    ShoppingService.$inject = ['$http', '$q'];

    function ShoppingService($http, $q) {
        return {
            baseUrl: 'assets/data/cart.json',

            getAllData: function () {
                var deferred = $q.defer();
                $http.get(this.baseUrl)
                    .then(function (res) {
                            deferred.resolve(res);
                        },
                        function (error) {
                            deferred.reject('Error fetching Region Data ' + error);
                        });
                return deferred.promise;
            },

            // getOutageData: function (val) {
            //     var deferred = $q.defer();
            //     var tObj = {
            //         headers: {
            //             'Accept': 'application/json',
            //             'Content-Type': 'application/json'
            //         }
            //     }
            //     $http.post(this.baseUrl + '/getOutageData', val, {
            //             headers: {
            //                 "Content-Type": "application/json"
            //             }
            //         })
            //         .then(function (res) {
            //                 deferred.resolve(res);
            //             },
            //             function (error) {
            //                 deferred.reject('Error fetching Outage Year Data ' + error);
            //             });
            //     return deferred.promise;
            // }
        }
    }
});