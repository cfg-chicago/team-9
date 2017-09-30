angular.module('myApp.controllers', []).
controller('timelineController',['$scope','$timeout', '$http', function($scope,$timeout, $http) {
  $scope.pull() = function() {
      $http.get('/getTimeline', $scope..master).then(function(response) {
             $scope.data = response.data;                                  
                    },
        function(response) {
          console.log("no");
      }
      
  }
 };
]);
