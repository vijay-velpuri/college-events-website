var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.submitForm = function() {
      if ($scope.feedbackForm.$valid) {
        $scope.submitted = true;
      }
    };
  });