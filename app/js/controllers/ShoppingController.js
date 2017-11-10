define(['app', 'ShoppingService'], function (app) {
    app.controller('ShoppingCtrl', ['$scope', '$state', '$http', 'ShoppingService', '$filter', '$compile', function ($scope, $state, $http, ShoppingService, $filter, $compile) {
        ShoppingService.getAllData().then(function (values) {
            $scope.shoppingData = values.data;
            console.log($scope.shoppingData);
            $scope.editDetailsModal = function (id) {
                $scope.currentSelected = $filter('filter')($scope.shoppingData.productsInCart, id);
                console.log($scope.currentSelected);
            }
            var numberOfItems = $scope.shoppingData.productsInCart.length;

            $scope.pricingDetails = {
                totalAmount: 0,
                promotionalDiscountValue: 0,
                totalAmountAfterDiscount: 0
            }
            $scope.calculateTotalAmount = function () {
                angular.forEach($scope.shoppingData.productsInCart, function (val, key) {
                    $scope.pricingDetails.totalAmount += val.p_price;
                });
            }

            $scope.calculateDiscountAmount = function () {
                if (numberOfItems <= 3) {
                    $scope.pricingDetails.promotionalDiscountValue = 0.05 * $scope.pricingDetails.totalAmount;
                }
                else if (numberOfItems > 3 && numberOfItems <= 6) {
                    $scope.pricingDetails.promotionalDiscountValue = 0.1 * $scope.pricingDetails.totalAmount;
                }
                else if (numberOfItems > 10) {
                    $scope.pricingDetails.promotionalDiscountValue = 0.25 * $scope.pricingDetails.totalAmount;
                }
                else {
                    $scope.pricingDetails.promotionalDiscountValue = 0;
                }
                $scope.pricingDetails.totalAmountAfterDiscount = $scope.pricingDetails.totalAmount - $scope.pricingDetails.promotionalDiscountValue;
            }

            $scope.calculateTotalAmount();
            $scope.calculateDiscountAmount();
        });
    }]);

    app.filter('capitalize', function () {
        return function (input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    });
});