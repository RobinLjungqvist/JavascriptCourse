var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        template: "<p>Start Page</p>"
    })
    .when('/Persons', {
        controller: 'PersonCtrl',
        templateUrl: "./persons.html"
    })
    .when('/Educations', {
        controller: 'EduCtrl',
        templateUrl: "./educations.html"
    })
    .when('/2017', {
        controller: 'beganCtrl',
        templateUrl: './began.html'
    })
    
});

app.factory('eduFactory', function() {

    var fac = {};


    function Person(Name, Education, StartYear) {
        this.Name = Name;
        this.Education = Education;
        this.StartYear = StartYear;
    }
    fac.Persons = [
        new Person("Sture", "C#", 2017),
        new Person("Nisse", "Javascript", 1999),
        new Person("Pisse", "Halloj ", 2013),
        new Person("Päron", "Databaser", 2005),
        new Person("Bertil", "C#", 2017),

    ]

    fac.Educations = ["C#", "Javascript", "Databaser", "Halloj", "Idrott", "Matte"]


    fac.getPersons = function(){
        return fac.Persons;
    }
    fac.getEducations = function(){
        return fac.Educations;
    }
    fac.sortPersonsByYear = function (inputYear) {
        var tempArray = [];
        $.each(fac.Persons, function (key, value) {

            if (value.StartYear == inputYear) {
                tempArray.push(value);
            }
        })

        return tempArray;
    }


    return fac;
});

app.controller('PersonCtrl', ['$scope', 'eduFactory', function ($scope, eduFactory) {
    $scope.Persons = eduFactory.getPersons();
}])

app.controller('EduCtrl', ['$scope', 'eduFactory', function ($scope, eduFactory) {
    $scope.educations = eduFactory.Educations;
}]);

app.controller('beganCtrl', ['$scope', 'eduFactory', function ($scope, eduFactory) {
    $scope.Persons = eduFactory.sortPersonsByYear("2017");
}]);

app.controller('navbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.showHome = function () {
        $location.path('/')
    }
    $scope.showPerson = function () {
        $location.path('/Persons')
    };
    $scope.showEducations = function () {
        $location.path('/Educations')
    };
    $scope.showBegan = function () {
        $location.path('/2017')
    };
}]);



