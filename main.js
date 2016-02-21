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

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {

        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 150) {
                 scope.boolChangeClass = true;
             } else {
                 scope.boolChangeClass = false;
             }
            scope.$apply();
        });
    };
});

app.controller('loginCtrl', function ($scope, $state) {
  $scope.clicked = false;
  $scope.signIn = function () {
    $state.go('main')
  }

})

app.controller('mainCtrl', function ($scope, getData) {

  getData.getCalendar().then(function(resp) {
    console.log(resp);
    $scope.date = resp.data.calendar.date;
    $scope.events = resp.data.calendar.events
  })

})


app.service('getData', function ($http) {
  this.getCalendar = function () {
    return $http.get('./assets/data/calendar.json')
  }
})
