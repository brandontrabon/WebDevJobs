/**
 * Created by btrabon on 4/4/17.
 */

'use strict';

define(['./search-box.module'], function(app) {
    (function() {
        var directive = function() {
            return {
                restrict: 'E',
                scope: {},
                controller: 'SearchBoxController',
                controllerAs: 'vm',
                bindToController: {
                    searchbuttontext: '@',
                    isinnav: '@'
                },
                templateUrl: 'widgets/search-box/search-box.template.html'
            };
        };

        app.directive('searchBox', directive);
    })();
});