/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var controller = function(SkillsPageService) {
            var vm = this;
        };

        controller.$inject = ['SkillsPageService'];

        app.controller('SkillsPageController', controller);
    })();
});