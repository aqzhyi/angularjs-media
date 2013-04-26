;angular
    .module('website', ['media.directives'])
    .config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    })
    .controller('testingCtrl', function($scope, $location) {
        console.log(/testingCtrl running/);
    })
;