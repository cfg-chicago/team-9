angular.module('myApp.controllers', []).
controller('studentformcontroller', function($scope) {
  //$scope.grades=[{'name':'4'},{'name':'5'},{'name':'6'},{'name':'7'},{'name':'8'}];
  $scope.grades=['4','5','6','7','8'];
  $scope.mentors=['Dennis','Stanley','Parker','Johnny','Justin'];
  $scope.master={};
  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  }
});
