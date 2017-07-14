
    console.log("hi");
    
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
            this.header = 'html/header/homepage.html';
            this.article = 'html/content/homepage.html';
            this.background = 'img/home-bg.jpg';
    }]);
    
    app.config(function($routeProvider, $locationProvider) {
        
        $routeProvider
            .when('/lawncron', {
                templateUrl: 'html/site.html',
                resolve: {
                    init: ['ContentData', function(ContentData) {
                        ContentData.header = "html/header/lawncron.html";
                        ContentData.article = "html/content/lawncron.html";
                        ContentData.background = 'img/about-bg.jpg';
                    }]
                }
            })

            .otherwise({
                templateUrl: 'html/site.html',
                resolve: {
                    init: ['ContentData', function(ContentData) {
                        ContentData.header = "html/header/homepage.html";
                        ContentData.article = "html/content/homepage.html";
                        ContentData.background = 'img/home-bg.jpg';
                    }]
                }
            });

        $locationProvider.html5Mode(true);
    });
    