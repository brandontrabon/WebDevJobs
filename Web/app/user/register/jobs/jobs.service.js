/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;

            vm.savedData = {
                jobs: []
            };

            vm.addNewJob = addNewJob;

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

        app.service('JobsPageService', service);
    })();
});