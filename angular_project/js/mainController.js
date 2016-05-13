


app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'ShopCircle'; 
  $scope.promo = 'Invite your friends and start your shopping circle.';

  $scope.user = {

  	name: "ace",
  	email: "ace",
  	password: "000"

  };

 $scope.logins = [];
    $scope.login = function () {
        $scope.logins.push($scope.user.firstName + " was logged in.");
    };



}]);