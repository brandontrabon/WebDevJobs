/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var service = function(RegisterBaseService) {
            var vm = this;

            vm.init = init;

            function init(pageChangeCallback) {
                RegisterBaseService.addCallback(pageChangeCallback);
            }
        };

        service.$inject = ['RegisterBaseService'];

        app.service('UserInfoPageService', service);
    })();
});