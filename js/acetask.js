var app = angular.module('Todo', []);

app.controller('TodoCtrl', function($scope) {
	$scope.todos = [];
	$scope.finished = [];

	$scope.count = 0;

	$scope.done = function(todo) {
		var timestamp = new Date();
		var indexOf = $scope.todos.indexOf(todo);
		if (indexOf !== -1) {
			$scope.todos.splice(indexOf, 1);
		}
		$scope.count += 1;
		$scope.finished += todo + " - " + timestamp;
	};

	$scope.add = function(e) {
		if (e.which && e.which === 13) {
			$scope.todos.push($scope.newTodo);
			$scope.newTodo = '';
		}
	};
  
});