/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var service = function(RegisterBaseService) {
            var vm = this;

            vm.savedData = {
                jobs: []
            };

            vm.init = init;
            vm.addNewJob = addNewJob;
            vm.addForm = RegisterBaseService.addForm;
            vm.buildErrorObject = RegisterBaseService.buildErrorObject;
            vm.clearErrorObject = RegisterBaseService.clearErrorObject;

            function init(pageChangeCallback) {
                RegisterBaseService.addCallback(pageChangeCallback);
            }

            function addNewJob() {
                var job = {
                    title: '',
                    position: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                };

                vm.savedData.jobs.push(job);
            }
        };

        service.$inject = ['RegisterBaseService'];

        app.service('JobsPageService', service);
    })();
});