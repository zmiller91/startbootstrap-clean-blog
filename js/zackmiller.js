

var app = angular.module('zackmiller', ['ngRoute']);


app.controller('HeaderCtrl', function($scope, PageData) {
    $scope.background = PageData.background;
});


app.directive('navigation', [function() {
    return {
        templateUrl: "html/navigation.html"
    };
}]);


app.directive('zmHeader', ['PageData', function(PageData) {
    return {
        templateUrl: function() {
            return PageData.header;
        }
    };
}]);


app.directive('zmContent', ['PageData', function(PageData) {
    return {
        templateUrl: function() {
            return PageData.article;
        }
    };
}]);


app.directive('zmFooter', [function() {
    return {
        templateUrl: "html/footer.html"
    };
}]);


app.service('PageData', [function() {

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

        .when('/about', {
            templateUrl: 'html/site.html',
            resolve: {
                init: ['PageData', function(PageData) {
                    PageData.set('about');
                }]
            }
        })

        .when('/contact', {
            templateUrl: 'html/site.html',
            resolve: {
                init: ['PageData', function(PageData) {
                    PageData.set('contact');
                }]
            }
        })

        .when('/lawncron', {
            templateUrl: 'html/site.html',
            resolve: {
                init: ['PageData', function(PageData) {
                    PageData.set('lawncron');
                }]
            }
        })

        .otherwise({
            templateUrl: 'html/site.html',
            resolve: {
                init: ['PageData', function(PageData) {
                    PageData.set('homepage');
                }]
            }
        });
});
