var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/dog', {
            templateUrl: '/views/templates/dog.html',
            controller: 'DogController'
        })
        .when('/cat', {
            templateUrl: '/views/templates/cat.html',
            controller: 'CatController'
        })
        .when('/reptile', {
            templateUrl: '/views/templates/reptile.html',
            controller: 'ReptileController'
        })
        .otherwise({
            redirectTo: 'dog'
        });


}]);