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
                // we have to add the form here since it does not exist when the page first loads
                // this is because until the form has been interacted with it is not created
                UserInfoPageService.addForm(vm.form);

                return vm.form.$valid;
            }
        };

        controller.$inject = ['UserInfoPageService'];

        app.controller('UserInfoPageController', controller);
    })();
});