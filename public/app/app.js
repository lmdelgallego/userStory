var app = angular.module('MyApp',[
		'ngRoute',
		'reverseFilter'
]);



app.config(function($routeProvider, $locationProvider, $httpProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'app/views/pages/home.html'
		})
		.when('/login',{
			templateUrl: 'app/views/pages/login.html'
		})
		.when('/singup',{
			templateUrl: 'app/views/pages/singup.html'
		})
		.when('/allStories',{
			templateUrl: 'app/views/pages/allStories.html',
			controller: 'AllStoriesController',
			resolve:{
				stories: function(Story){
					return Story.allStories();
				}
			}
		});

		$locationProvider.html5Mode(true);
});

app.config(['$httpProvider', function($httpProvider) { 
	console.log($httpProvider) ;
    $httpProvider.interceptors.push('AuthInterceptor');
}]);