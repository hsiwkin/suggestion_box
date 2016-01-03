app.controller('HomeController', ['$scope', 'suggestions', '$routeParams',
    function($scope, suggestions, $routeParams) {

        $scope.posts = suggestions.posts;

}]);