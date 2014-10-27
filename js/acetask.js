var app = angular.module('Todo', []);

app.controller('TodoCtrl', function($scope) {
	$scope.todos = [];
	$scope.finished = [];
	$scope.count = 0;

	$scope.done = function(todo) {
		var new_time = new Date();
		var timestamp = new_time.getHours() + ":" + new_time.getMinutes();
		var indexOf = $scope.todos.indexOf(todo);
		if (indexOf !== -1) {
			$scope.todos.splice(indexOf, 1);
		}
		$scope.count += 1;
		$scope.finished.push(todo + " (" + timestamp + ")");
		
	};

	$scope.add = function(e) {
		if (e.which && e.which === 13) {
			$scope.todos.push($scope.newTodo);
			$scope.newTodo = '';
		}
	};
  
});