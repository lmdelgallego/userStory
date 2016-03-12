app.controller('StoryController', ['$scope','Story','socketio', function($scope, Story,socketio ){

	// Story.allStory()
	// 	.success(function(data){
	// 		$scope.stories = data;
	// 	});

	$scope.stories = Story.allStory();


	// $scope.createStory = function (){
	// 	$scope.message = '';
	// 	Story.create($scope.storyData)
	// 	.success(function(data){
	// 		$scope.storyData = '';
	// 		$scope.message = data.message;
	// 	});
	// }

	$scope.createStory = function(){
		$scope.message = "";
		Story.create($scope.storyData).then(function(data){
			$scope.storyData = '';
			$scope.message = data.message;
		})
	}

	socketio.on('story',function(data){
		$scope.stories.push(data);
	});



}])
.controller('AllStoriesController', ['$scope','stories', 'socketio', function($scope,stories, socketio){
	$scope.stories = stories.data;

	socketio.on('story', function(data){
		$scope.stories.push(data);
	})
}]);
