var Main = (function() {

    'use strict';

    function AceTaskCtrl(taskFactory) {
        this.todos = [];
        this.finished = [];
        this.count = 0;
        this.done = taskFactory.done;
        this.add = taskFactory.add;
        this.newTodo = '';
    }

    AceTaskCtrl.$inject = ['taskFactory'];

    var app = angular.module('acetask', [])

    .factory('taskFactory', [function () {

        function done(scope, todo) {
            var timestamp = new Date();

            var task = {
                text: todo,
                time: timestamp.getHours() + ':' + timestamp.getMinutes()
            };

            var index = scope.todos.indexOf(todo);
            if (index !== -1) {
                scope.todos.splice(index, 1);
            }

            scope.count += 1;

            scope.finished.push(task.text + ' (' + task.time + ')');
        }

        function add(scope, e, todo) {
            if (e.which && e.which === 13) {
                scope.todos.push(todo);
                scope.newTodo = '';
            }
        }
    
        return {
            done: done,
            add: add
        };
    }])

    .directive('acetask', [function () {
        return {
            bindToController:true,
            controller: AceTaskCtrl,
            controllerAs: 'app'
        };
    }])

    .directive('taskmanager', [function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/taskmanager.html'
        };
    }])

    .directive('newsletter', [function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/newsletter.html'
        };
    }])

    .directive('navbar', [function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/navbar.html'
        };
    }])

    .directive('acefooter', [function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/acefooter.html'
        };
    }])

    .directive('analytics', [function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/analytics.html'
        };
    }]);
})();