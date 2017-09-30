angular.module('myApp.controllers', []).
controller('eventformcontroller', ['$scope','Upload','$timeout', function($scope, Upload, $timeout) {
  //$scope.grades=[{'name':'4'},{'name':'5'},{'name':'6'},{'name':'7'},{'name':'8'}];
  $scope.eventtypes=['Field Trip','Weekly Update','End of Year Project','Family Dinner'];

  $scope.master={};
  $scope.events = [];
  $scope.update = function(user) {
    $scope.master = angular.copy(user);
    $scope.events.push({
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      eventname: $scope.master.eventname,
      eventtype: $scope.master.eventtype,
      date: $scope.master.date,
      moment: $scope.master.moment,
      learn: $scope.master.learn
    })
  };

  $scope.uploadPic = function(file) {
    file.upload = Upload.upload({
      url: '/hello.png',
      data: {username: $scope.username, file: file},
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
    });
    }


}]);
