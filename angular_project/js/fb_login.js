
app.controller('Cntrlr', ['$scope', function($scope) { 
 


$scope.fblogin = function(){

	

		var ref = new Firebase("https://torrid-heat-3055.firebaseio.com/");
		ref.authWithOAuthPopup("facebook", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			  }
		});


};

}]);