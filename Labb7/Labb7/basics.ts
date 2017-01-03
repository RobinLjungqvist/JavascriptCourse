/*
1 Euro =
9.53245789 Swedish kronor
*/

declare var angular: any;

let app = angular.module('currencyConverter', []);



app.controller('converter', ['$scope', function ($scope) {
    $scope.ConvertToEuro = function () {
        if (typeof($scope.sek) == "number") {
            var result = ConvertToEuro($scope.sek);
            $scope.sekResult = result;
        }
        else { $scope.sekResult = ""; }

    };
    $scope.ConvertToSek = function () {
        if (typeof ($scope.euro) == "number") {
            var result = ConvertToSek($scope.euro);
            $scope.euroResult = result;
        }
        else { $scope.euroResult = ""; }
    };
}]);

function ConvertToEuro(input: number): number {
    let rate: number = 0.104871;
    let result: number = input * rate;
    return result;
}

function ConvertToSek(input: number): number {
    let rate: number = 9.53113;
    let result: number = input * rate;
    return result;
}