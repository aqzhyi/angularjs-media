var app = angular.module('app', ['angularjs.media.directives']);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
    .when('/twitch', {templateUrl: '/partials/twitch.html'})
    .when('/justin', {templateUrl: '/partials/justin.html'})
    .when('/flash', {templateUrl: '/partials/flash.html'})
    .when('/youtube', {templateUrl: '/partials/youtube.html'})
  ;

  $routeProvider.otherwise({
    redirectTo: '/twitch'
  });
});

app.controller('navbarCtrl', function($scope, $location) {
  $scope.isActive = function(path) {
    return $location.path() === path;
  };
});

app.controller('testCtrl', function($scope) {
  $scope.firstVideo = 'BlQ2tMQzg80'; 
});