angular.module("Google", ["ngRoute"])
.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'templates/home.html',
            controller : 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', function($scope) {
        //empty for now
    });
