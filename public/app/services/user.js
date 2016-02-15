app.factory('userService', ['$http','$window', function($http,$window){
	
	var userFactory = {}

	userFactory.create = function(userData){
		return $http.post('/api/singup', userData);
	}

	userFactory.all = function(){
		return $http.post('api/users');
	}

	return userFactory;

}])