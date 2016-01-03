app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {

    $scope.posts = suggestions.posts;

    $scope.addSuggestion = function() {
        //TODO

        if ($scope.title) {
            console.log('title: ' + $scope.title);
            suggestions.posts.push()

            $scope.title = '';
        }

    }

}]);