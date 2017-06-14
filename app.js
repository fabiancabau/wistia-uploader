'use strict';

// Declare app level module which depends on views, and components
angular.module('ProcessStreet', ['ui.router', 'blueimp.fileupload'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'main.html'
    });

    $urlRouterProvider.otherwise('main');

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
