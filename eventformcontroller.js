angular.module('myApp.controllers', []).
controller('eventformcontroller', function($scope) {
  //$scope.grades=[{'name':'4'},{'name':'5'},{'name':'6'},{'name':'7'},{'name':'8'}];
  $scope.eventtypes=['Field Trip','Weekly Update','End of Year Project','Family Dinner'];

  $scope.master={};
  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  }
});
