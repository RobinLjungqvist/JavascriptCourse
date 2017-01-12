/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var myApp;
(function (myApp) {
    var app = angular.module('app', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: './App/PartialViews/start.html'
        })
            .when('/AllEmp', {
            controller: 'employeeCtrl',
            templateUrl: './App/PartialViews/AllEmp.html'
        })
            .when('/AdminEmp', {
            controller: 'employeeCtrl',
            templateUrl: './App/PartialViews/AdminEmp.html'
        })
            .when('/TechEmp', {
            controller: 'employeeCtrl',
            templateUrl: './App/PartialViews/TechEmp.html'
        });
    });
    app.service('employeeService', function () {
        //Data
        var TechEmp = [
            new Entities.TechEmployee("Nisse", "Hallberg", "Server", false, false),
            new Entities.TechEmployee("Baloo", "Björn", "Fiber", true, true),
            new Entities.TechEmployee("Kalle", "Blomberg", "Server", false, false),
            new Entities.TechEmployee("Bernie", "Berntsson", "Electricity", true, true),
        ];
        var AdminEmp = [
            new Entities.AdminEmployee("Lisa", "Sävås", "Frostend", false, "Html/CSS"),
            new Entities.AdminEmployee("Berit", "Sävås", "Reception", false, "Excel"),
            new Entities.AdminEmployee("Anna", "Larsson", "Backend", false, "C#/SQL"),
            new Entities.AdminEmployee("Olle", "Skogen", "Frostend", false, "Javascript")
        ];
        //Methods
        this.GetTechEmp = function () {
            return TechEmp;
        };
        this.GetAdminEmp = function () {
            return AdminEmp;
        };
        this.GetAllEmp = function () {
            var emp = [];
            emp = emp.concat(TechEmp);
            emp = emp.concat(AdminEmp);
            return emp;
        };
    });
    app.controller('navbarCtrl', ['$scope', '$location', function ($scope, $location) {
            $scope.Home = function () {
                $location.path('/');
            };
            $scope.AllEmp = function () {
                $location.path('/AllEmp');
            };
            $scope.AdminEmp = function () {
                $location.path('/AdminEmp');
            };
            $scope.TechEmp = function () {
                $location.path('/TechEmp');
            };
        }]);
    app.controller('employeeCtrl', ['$scope', 'employeeService', function ($scope, employeeService) {
            $scope.Employees = employeeService.GetAllEmp();
            $scope.AdminEmp = employeeService.GetAdminEmp();
            $scope.TechEmp = employeeService.GetTechEmp();
        }]);
})(myApp || (myApp = {}));
