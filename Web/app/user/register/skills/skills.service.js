/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var service = function(RegisterBaseService) {
            var vm = this;

            vm.savedData = {
                skills: []
            };

            vm.init = init;
            vm.addNewSkill = addNewSkill;
            vm.addForm = RegisterBaseService.addForm;
            vm.buildErrorObject = RegisterBaseService.buildErrorObject;
            vm.clearErrorObject = RegisterBaseService.clearErrorObject;

            function init(pageChangeCallback) {
                RegisterBaseService.addCallback(pageChangeCallback);
            }

            function addNewSkill() {
                var skill = {
                    skill: '',
                    level: 0,
                    yearsExperience: ''
                };

                vm.savedData.skills.push(skill);
            }
        };

        service.$inject = ['RegisterBaseService'];

        app.service('SkillsPageService', service);
    })();
});