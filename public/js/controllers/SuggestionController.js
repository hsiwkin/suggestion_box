app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams) {

    $scope.singlePost = suggestions.posts[$routeParams.id];
    $scope.comments = suggestions.posts[$routeParams.id].comments;

    $scope.addComment = function() {

        if (!$scope.comment) {
            return;
        }

        suggestions.posts[$routeParams.id].comments.push($scope.comment);

        $scope.comment = '';
    };
}]);