var app = angular.module('suggestionBox', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/suggestion/:id', {
            templateUrl: 'views/suggestion.html',
            controller: 'SuggestionController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

