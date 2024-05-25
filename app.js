// Define the AngularJS application module
var app = angular.module('myApp', ['ui.router']);

// Configure the routes
app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched URL, redirect to /home
    $urlRouterProvider.otherwise('/home');

    // Define the states
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './views/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html',
            controller: 'AboutController'
        });
});

// Define the controllers
app.controller('HomeController', function($scope) {
    $scope.message = "Welcome to the Home Page!";
});

app.controller('AboutController', function($scope) {
    $scope.message = "Learn more About Us.";
});
