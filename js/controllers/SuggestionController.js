app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {

    $scope.singlePost = suggestions.posts[$routeParams.id];

}]);