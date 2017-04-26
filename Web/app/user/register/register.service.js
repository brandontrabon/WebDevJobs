/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['./register.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;

            vm.saveUserInformation = saveUserInformation;

            function saveUserInformation(user) {

            }

            function uploadResume(file) {

            }

            function saveJobInformation(jobs) {

            }

            function saveSkillInformation(skills) {

            }
        };

        app.service('RegisterService', service);
    })();
});