/**
 * Created by btrabon on 4/7/17.
 */

'use strict';

define(['./icon-textbox.module'], function(app) {
    (function() {
        var directive = function() {
            return {
                restrict: 'E',
                scope: {},
                controller: 'IconTextboxController',
                controllerAs: 'vm',
                bindToController: {
                    icon: '@',
                    placeholder: '@',
                    type: '@',
                    name: '@',
                    model: '=',
                    inputRequired: '<'
                },
                templateUrl: 'widgets/icon-textbox/icon-textbox.template.html'
            };
        };

        app.directive('iconTextbox', directive);
    })();
});