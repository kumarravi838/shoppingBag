define(['dependencyResolverFor'], function (dependencyResolverFor) {
    var loadController = function (controllerName) {
        return ["$q", function ($q) {
            var deferred = $q.defer();
            require([controllerName], function () {
                deferred.resolve();
            });
            return deferred.promise;
        }];
    };

    return {
        defaultRoutePath: '/home',
        states: [{
            name: "home",
            data: {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'ShoppingCtrl',
                resolve: {
                    NavigationCtrl: loadController("js/controllers/ShoppingController")
                }
            }
        }]
    };
});