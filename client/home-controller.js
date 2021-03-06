myAngular.controller("HomeController", ["$scope", "$state", "$stateParams","$http",
function($scope, $state, $stateParams,$http){
  $scope.girls = [];
  $http.get("/api/hot-girl").then(function(res){
    $scope.girls = res.data;
  });
  

  if ($stateParams.girl) {
    if ($stateParams.index != -1) {
      $scope.girls[$stateParams.index] = $stateParams.girl;
    } else {
      $scope.girls.push($stateParams.girl);
    }
  }
}]);
