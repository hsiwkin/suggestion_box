app.factory('suggestions', [function() {
    return {
        posts: [
            {
                title: 'Free pizza at club meetings',
                upvotes: 15,
                comments: [
                    'Good one',
                    'Bad one',
                    'I don\'t know what I\'m doing here ...'
                ]
            },
            {
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: []
            },
            {
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 7,
                comments: []
            },
            {
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
                upvotes: 3,
                comments: []
            }
        ]
    };
}]);