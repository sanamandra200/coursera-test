(function() {

    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController);

    
    MsgController.$inject = ['$scope'];
        function MsgController ($scope) {
        $scope.name="Ravikumar";

        $scope.sayHello = function() {
            return "Ravi likes to eat healthy snakes at night.";
        }

           
        };

        


})();