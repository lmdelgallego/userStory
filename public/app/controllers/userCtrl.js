app.controller('userCtrl', ['$scope','userService', function($scope, userService){
	

	userService.all()
		.success(function(data){
			$scope.users = data;
		});

}]);

app.controller('userCreateCtrl', ['$scope', '$location', '$window', 'userService', function($scope, $location, $window, userService){
	
	$scope.signupUser = function(){
		$scope.menssage = "";

		userService.create($scope.userData)
			.then(function(response){
				$scope.userData = {}
				$scope.menssage = response.data.menssage;

				$window.localStorage.setItem('token', response.data.token);
				$location.path('/');
			})

	}
	
}])