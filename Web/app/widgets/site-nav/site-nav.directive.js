/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define(['./site-nav.module'], function(app) {
    (function() {
        var directive = function() {
            return {
                restrict: 'E',
                scope: {},
                controller: 'SiteNavController',
                controllerAs: 'vm',
                bindToController: {

                },
                templateUrl: 'widgets/site-nav/site-nav.template.html'
            };
        };

        app.directive('siteNav', directive);
    })();
});