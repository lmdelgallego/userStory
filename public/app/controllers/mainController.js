app.controller('MainController', ['$scope', '$location', 'Auth',function($scope, $location, Auth){

	

	$scope.loggedIn = Auth.isLoggedIn();

	$scope.hola = "HOLA  FUCK";
	

	$scope.$on("$routeChangeStart", function(){
		$scope.loggedIn = Auth.isLoggedIn();
		
		Auth.getUser()
		.then(function(data){
			$scope.user = data.data
			console.log($scope.user, $scope.loggedIn);	

		});
	});


	$scope.doLogin = function(){
		$scope.proccessing = true
		$scope.error = "";

		Auth.login($scope.username, $scope.password)
			.success(function (data) {
				 $scope.proccessing = false;

				 Auth.getUser()
				 .then(function(data){
					 $scope.user = data.data;
				 });

				if (data.success) {
				 	$location.path('/');
				}else{
					$scope.error = data.menssage
				}

			});
	}

	$scope.doLogout = function(){
		Auth.logout();
		$location.path('/logout');
	}


}])
