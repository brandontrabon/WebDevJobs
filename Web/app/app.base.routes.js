/**
 * Created by btrabon on 4/3/17.
 */

'use strict';

define(['./app'], function(app) {
    (function() {
        app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('base', {
                    url: '',
                    abstract: true,
                    controller: 'RoutingBaseController as rbc',
                    templateUrl: 'app.base.template.html',
                    resolve: {

                    }
                });
        }]);
    })();
});