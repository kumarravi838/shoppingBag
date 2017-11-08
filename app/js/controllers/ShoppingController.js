define(['app', 'ShoppingService'], function (app) {
    app.controller('ShoppingCtrl', ['$scope', '$state', '$http', 'ShoppingService', function ($scope, $state, $http, ShoppingService) {
        ShoppingService.getAllData().then(function (values) {
            $scope.shoppingData = values.data;
            console.log($scope.shoppingData);
            debugger
        });
    }]);
    app.filter('capitalize', function() {
        return function(input) {
          return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    });
});