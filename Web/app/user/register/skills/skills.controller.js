/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var controller = function(SkillsPageService) {
            var vm = this;

            vm.savedData = SkillsPageService.savedData;

            vm.$onInit = onInit;
            vm.addNewSkill = SkillsPageService.addNewSkill;

            function onInit() {
                SkillsPageService.init(pageChangeCallback);
            }

            function pageChangeCallback() {
                SkillsPageService.addForm(vm.form);

                return vm.form.$valid;
            }
        };

        controller.$inject = ['SkillsPageService'];

        app.controller('SkillsPageController', controller);
    })();
});