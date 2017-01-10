/*
1 Euro =
9.53245789 Swedish kronor
*/
var app = angular.module('currencyConverter', []);
app.controller('converter', ['$scope', function ($scope) {
        $scope.ConvertToEuro = function () {
            if (typeof ($scope.sek) == "number") {
                var result = ConvertToEuro($scope.sek);
                $scope.sekResult = result;
            }
            else {
                $scope.sekResult = "";
            }
        };
        $scope.ConvertToSek = function () {
            if (typeof ($scope.euro) == "number") {
                var result = ConvertToSek($scope.euro);
                $scope.euroResult = result;
            }
            else {
                $scope.euroResult = "";
            }
        };
    }]);
function ConvertToEuro(input) {
    var rate = 0.104871;
    var result = input * rate;
    return result;
}
function ConvertToSek(input) {
    var rate = 9.53113;
    var result = input * rate;
    return result;
}
//# sourceMappingURL=basics.js.map