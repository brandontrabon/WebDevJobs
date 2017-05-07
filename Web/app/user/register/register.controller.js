/**
 * Created by btrabon on 5/3/17.
 */

'use strict';

define(['./register.module'], function(app) {
    (function() {
        var controller = function(RegisterService, $state) {
            var vm = this;

            vm.progressInformation = RegisterService.progressInformation;
            vm.nextStep = RegisterService.nextStep;
            vm.previousStep = RegisterService.previousStep;
            vm.save = RegisterService.save;

            vm.$onInit = onInit;

            function onInit() {
                RegisterService.init($state);
            }
        };

        controller.$inject = ['RegisterService', '$state'];

        app.controller('RegisterController', controller);
    })();
});