app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {

    $scope.posts = suggestions.posts;

    $scope.addSuggestion = function() {

        if (!$scope.title) {
            return;
        }

        //if ($scope.title) {
        console.log('title: ' + $scope.title);

        var suggestion = {
            title: $scope.title,
            upvotes: 0,
            comments: []
        };

        suggestions.posts.push(suggestion);

        $scope.title = '';
        //}

    }

}]);