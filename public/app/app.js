var app = angular.module('MyApp',[
		'ngRoute',
		'reverseFilter',
		'ui.router'
]);


app.config(function($routeProvider, $locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
	/*$routeProvider
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
		});*/
		
	  $stateProvider

	  // Base State
	  .state('/', {
		url: '/',
		templateUrl: 'app/views/pages/home.html'
	  })
	  
	  .state('login', {
		url: '/login',
		templateUrl: 'app/views/pages/login.html'
	  })
	  
	  .state('allStories', {
		url: '/allStories',
		templateUrl: 'app/views/pages/allStories.html',
		controller: 'AllStoriesController',
		  resolve:{
				stories: function(Story){
					return Story.allStories();
				}
		  }
	  });
	

	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise('/');
});

app.config(['$httpProvider', function($httpProvider) { 
	console.log($httpProvider) ;
    $httpProvider.interceptors.push('AuthInterceptor');
}]);