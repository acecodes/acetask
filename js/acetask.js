var Main = (function() {

    'use strict';

    var app = angular.module('AceTask', []);

    app.controller('AceTaskCtrl', function($scope) {
        $scope.todos = [];
        $scope.finished = [];
        $scope.count = 0;

        $scope.done = function(todo) {
            var timestamp = new Date();

            var task = {
                text: todo,
                time: timestamp.getHours() + ':' + timestamp.getMinutes()
            };

            var indexOf = $scope.todos.indexOf(todo);
            if (indexOf !== -1) {
                $scope.todos.splice(indexOf, 1);
            }
            $scope.count += 1;

            $scope.finished.push(task.text + ' (' + task.time + ')');

        };

        $scope.add = function(e) {
            if (e.which && e.which === 13) {
                $scope.todos.push($scope.newTodo);
                $scope.newTodo = '';
            }
        };
    });
})();