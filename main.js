'use strict';
$(document).ready(function() {

  var $mainButton = $("#loginButton"),
      $closeButton = $(".close-button"),
      $buttonWrapper = $(".button-wrapper"),
      $layer = $(".layered-content");

  $mainButton.on("click", function(){
      $buttonWrapper.addClass("clicked").delay(1500).queue(function(){
          $layer.addClass("active");
      });
  });

  $closeButton.on("click", function(){
      $buttonWrapper.removeClass("clicked");
      $layer.removeClass("active");
  });



});
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



app.controller('loginCtrl', function ($scope, $state) {
  $scope.clicked = false;
  $scope.signIn = function () {
    $state.go('main')
  }
})

app.controller('mainCtrl', function () {

})
