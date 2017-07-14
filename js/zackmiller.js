var app = angular.module('zackmiller', ['ngRoute']);

app.controller('HeaderCtrl', function($scope, ContentData) {
    $scope.background = ContentData.background;
});

app.directive('navigation', [function() {
    return {
        templateUrl: "html/navigation.html"
    };
}]);

app.directive('zmHeader', ['ContentData', function(ContentData) {
    return {
        templateUrl: function() {
            return ContentData.header;
        }
    };
}]);

app.directive('zmContent', ['ContentData', function(ContentData) {
    return {
        templateUrl: function() {
            return ContentData.article;
        }
    };
}]);

app.directive('zmFooter', [function() {
    return {
        templateUrl: "html/footer.html"
    };
}]);

app.service('ContentData', [function() {

        this.set = function(content) {
            this.header = 'html/header/' + content + '.html';
            this.article = 'html/content/' + content + '.html';
            this.background = 'img/' + content + '.jpg';
        };

        this.set('homepage');
}]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

        .when('/lawncron', {
            templateUrl: 'html/site.html',
            resolve: {
                init: ['ContentData', function(ContentData) {
                    ContentData.set('lawncron');
                }]
            }
        })

        .otherwise({
            templateUrl: 'html/site.html',
            resolve: {
                init: ['ContentData', function(ContentData) {
                    ContentData.set('homepage');
                }]
            }
        });
});
