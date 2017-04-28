/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['./register.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;

            vm.registration = {};

            vm.setUserInformation = setUserInformation;
            vm.uploadResume = uploadResume;
            vm.setJobInformation = setJobInformation;
            vm.setSkillInformation = setSkillInformation;
            vm.save = save;

            function setUserInformation(user) {
                vm.registration.userInfo = user;
            }

            function uploadResume(file) {
                console.log(file);
            }

            function setJobInformation(jobs) {
                vm.registration.jobs = jobs;
            }

            function setSkillInformation(skills) {
                vm.registration.skills = skills;
            }

            function save() {

            }
        };

        app.service('RegisterService', service);
    })();
});