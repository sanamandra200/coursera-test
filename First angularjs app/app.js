(function() {

    'use strict';

    angular.module('MyFirstApp', [])

    .controller('MyFirstController', function ($scope) {

        $scope.name = "Ravikumar";
        $scope.sayHello = function (){
          return  "Welcome to coursera";
        };
    });

})();