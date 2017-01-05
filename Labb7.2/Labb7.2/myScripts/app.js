/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="entities/product.ts" />
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: '../Pages/Home.html'
    })
        .when('/Books', {
        controller: 'bookCtrl',
        templateUrl: '../Pages/Books.html',
    })
        .when('/AllProducts', {
        controller: 'productsCtrl',
        templateUrl: '../Pages/AllProducts.html'
    });
});
app.service('productService', function () {
    //Data
    var Books = [
        new Entities.Book("Nalle Puh", "Children", 200, 12345, "Christopher Robin", 1986),
        new Entities.Book("Sagan om Ringen", "Fantasy", 299, 24345, "J.R.R Tolkien", 1980),
        new Entities.Book("Brum", "Children", 99, 12515, "Douglas Pattersson", 2000),
        new Entities.Book("C.S.I Winslöv", "Criminal", 249, 23525, "Leif G.W Persson", 2016),
        new Entities.Book("Harry Potter", "Fantasy", 300, 457547, "J.K. Rowling", 1997),
        new Entities.Book("Kalle Ankas äventyr", "Comics", 89, 346364, "Walt Disney", 2005),
    ];
    var DVDs = [
        new Entities.DVD("Die Hard", "Action", 125, 12643, "John Wayne", "1h 25m"),
        new Entities.DVD("Die Hard 2", "Action", 155, 52673, "John Wayne", "1h 37m"),
        new Entities.DVD("Billy Elliot", "Drama", 425, 15223, "Gerald Fusco", "2h 5m"),
        new Entities.DVD("Okänd Soldat", "Action", 525, 64323, "Edvin Laine", "3h 25m"),
        new Entities.DVD("Alla vi barn i Bullerbyn", "Children", 225, 64326, "Lasse Hallström", "1h 25m")
    ];
    var Games = [
        new Entities.Game("World of Warcraft", "MMORPG", 399, 55522, "Blizzard", "Activision"),
        new Entities.Game("Tibia", "MMORPG", 255, 55555, "CipSoft", "CipSoft"),
        new Entities.Game("Path of Exiles", "ActionRPG", 124, 55533, "GGG", "GGG"),
        new Entities.Game("Battlefield One", "FPS", 521, 55514, "Activision", "Activision")
    ];
    //Methods
    this.GetAllProducts = function () {
        var products = [];
        products = products.concat(Books);
        products = products.concat(DVDs);
        products = products.concat(Games);
        return products;
    };
    this.GetBooks = function () {
        return Books;
    };
    this.AddBook = function (Name, Category, Price, ArticleNumber, Author, ReleaseYear) {
        var newBook = new Entities.Book(Name, Category, Price, ArticleNumber, Author, ReleaseYear);
        Books.push(newBook);
    };
});
app.controller('bookCtrl', ['$scope', '$timeout', 'productService', function ($scope, $timeout, productService) {
        $scope.Books = productService.GetBooks();
        $scope.bookSubmit = function (form) {
            if (form.$valid) {
                productService.AddBook($scope.bookName, $scope.bookCategory, $scope.bookPrice, $scope.bookArtNr, $scope.bookAuthor, $scope.bookYear);
                $scope.success = !$scope.success;
                Clear();
                $timeout(function () {
                    $scope.success = !$scope.success;
                }, 2000);
            }
        };
        function Clear() {
            $scope.bookName = "";
            $scope.bookCategory = "";
            $scope.bookPrice = "";
            $scope.bookArtNr = "";
            $scope.bookAuthor = "";
            $scope.bookYear = "";
        }
    }]);
app.controller('navbarCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.GoToBooks = function () {
            $location.path('/Books');
        };
        $scope.GoToHome = function () {
            $location.path('/');
        };
        $scope.GoToAllProducts = function () {
            $location.path('/AllProducts');
        };
    }]);
app.controller('productsCtrl', ['$scope', 'productService', function ($scope, productService) {
        $scope.Products = productService.GetAllProducts();
    }]);
