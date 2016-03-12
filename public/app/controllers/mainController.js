app.controller('MainController', ['$scope', '$location', 'Auth','Restangular',function($scope, $location, Auth,Restangular){

	// Menu items
 	$scope.menu = [
	    {
	      link : '',
	      title: 'Home',
	      icon: 'action:ic_dashboard_24px' // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
	    },
	    {
	      link : 'allStories',
	      title: 'All Stories',
	      icon: 'social:ic_group_24px'
	    }
	  ];

	$scope.user = {};
	$scope.loggedIn = Auth.isLoggedIn();

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
