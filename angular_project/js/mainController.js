


app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'ShopCircle'; 
  $scope.promo = 'Invite your friends and start your shopping circle.';

$scope.userData = {

	name: '',
	email: '',
	password:''
	
};

$scope.saveData = function(){

		
		window.alert("just created user");

		var ref = new Firebase("https://torrid-heat-3055.firebaseio.com/");
	 	ref.createUser({email: $scope.userData.email, 
	 		password: $scope.userData.password},
	 		function(error, userData) {
  			if (error){
  				console.log(error);
  			}


	 		});

	};

	 

}]);

