/**
 * Created by btrabon on 4/3/17.
 */

'use strict';

define(['./user.module'], function(app) {
    (function() {
        app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('base.user', {
                    url: '',
                    abstract: true,
                    controller: 'RoutingBaseUserController as rbuc',
                    templateUrl: 'user/user.base.template.html',
                    resolve: {

                    }
                })
                .state('base.user.home', {
                    url: '/',
                    controller: 'HomePageRouteController as hprc',
                    template: '<home-page></home-page>',
                    resolve: {

                    }
                });

            $urlRouterProvider.otherwise(function($injector) {
                var $state = $injector.get('$state');
                $state.go('base.user.home');
            });
        }]);
    })();
});