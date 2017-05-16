/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;

            vm.savedData = {
                skills: []
            };

            vm.addNewSkill = addNewSkill;

            function addNewSkill() {
                var skill = {
                    skill: '',
                    level: 0,
                    yearsExperience: ''
                };

                vm.savedData.skills.push(skill);
            }
        };

        app.service('SkillsPageService', service);
    })();
});