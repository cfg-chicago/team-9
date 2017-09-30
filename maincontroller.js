angular.module('myApp.controllers', []).
controller('maincontroller', ['$scope','$timeout','$http', function($scope, $timeout, $http) {
  /*
  $scope.pull() = function() {
    $http.get('/getevent',$scope.master).then(function(response) {
      $scope.data = response.data;
    },
    function(response) {
      console.log("no");
    });
    var src = "data:image/jpeg;base64,";
    src += $scope.data.picture;
    var newImage = document.createElement('img');
    newImage.src = src;
    $scope.picture = newImage.src;
  };
  */

}]);
