'use strict';

let app = angular.module('mainApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "../partials/login.html",
      controller: "loginCtrl",
    })
    .state('main', {
      url: "/main",
      templateUrl: "../partials/main.html",
      controller: "mainCtrl",
    })

  $urlRouterProvider.otherwise('/login');
});



app.controller('loginCtrl', function ($scope) {
  $scope.clicked = false;
})

app.controller('mainCtrl', function () {

})
