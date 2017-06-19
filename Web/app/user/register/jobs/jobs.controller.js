/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var controller = function(JobsPageService) {
            var vm = this;

            vm.$onInit = onInit;
            vm.savedData = JobsPageService.savedData;
            vm.addNewJob = JobsPageService.addNewJob;

            function onInit() {
                JobsPageService.init(pageChangeCallback);
            }

            function pageChangeCallback() {
                JobsPageService.addForm(vm.form);

                return vm.form.$valid;
            }
        };

        controller.$inject = ['JobsPageService'];

        app.controller('JobsPageController', controller);
    })();
});