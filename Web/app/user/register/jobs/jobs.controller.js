/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var controller = function(JobsPageService) {
            var vm = this;

            vm.savedData = JobsPageService.savedData;

            vm.addNewJob = JobsPageService.addNewJob;
        };

        controller.$inject = ['JobsPageService'];

        app.controller('JobsPageController', controller);
    })();
});