/**
 * Created by btrabon on 5/3/17.
 */

'use strict';

define(['./register.module'], function(app) {
    (function() {
        var controller = function(RegisterBaseService, $state) {
            var vm = this;

            vm.progressInformation = RegisterBaseService.progressInformation;
            vm.nextStep = RegisterBaseService.nextStep;
            vm.previousStep = RegisterBaseService.previousStep;
            vm.save = RegisterBaseService.save;
            vm.registration = RegisterBaseService.registration;

            vm.$onInit = onInit;

            function onInit() {
                RegisterBaseService.init($state);
            }
        };

        controller.$inject = ['RegisterBaseService', '$state'];

        app.controller('RegisterBaseController', controller);
    })();
});