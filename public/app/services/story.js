app.factory('Story',['Restangular', function(Restantular){
	var storyFactory = {};

	storyFactory.allStories = function(){
		return Restantular.all('all_stories').getList().$object;
	}

	storyFactory.create = function(storyData){
		return Restantular.all('').post(storyData);
	}

	storyFactory.allStory = function(){
		return Restantular.all('').getList().$object;
	}

	return storyFactory;
}])

// app.factory('Story', ['$http', function($http){
//
// 		var storyFactory = {};
//
// 		storyFactory.allStories = function(){
// 			return $http.get('/api/all_stories');
// 		}
//
// 		storyFactory.create = function(storyData){
// 			return $http.post('/api',storyData);
// 		}
//
// 		storyFactory.allStory = function(){
// 			return $http.get('/api');
// 		}
//
// 		return storyFactory;
// }])
.factory('socketio', ['$rootScope', function($rootScope){
	var socket = io.connect();
	return {
		on: function(eventName, callback){
			socket.on(eventName, function(){

				var args = arguments;

				$rootScope.$apply(function(){
					callback.apply(socket, args);
				});

			});
		},

		emit: function(eventName, data, callback){
			socket.emit(eventName,data,function(){
				var args = arguments;
				$rootScope.apply(function(){
					if (callback) {
						callback.apply(socket, args);
					}
				});
			});
		}
	}
}])
