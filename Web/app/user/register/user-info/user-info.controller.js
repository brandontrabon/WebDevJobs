/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var controller = function(UserInfoPageService) {
            var vm = this;

            vm.$onInit = onInit;

            function onInit() {
                UserInfoPageService.init(pageChangeCallback);
            }

            function pageChangeCallback() {
                return vm.form.$valid;
            }
        };

        controller.$inject = ['UserInfoPageService'];

        app.controller('UserInfoPageController', controller);
    })();
});