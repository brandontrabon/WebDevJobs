/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var component = {
            templateUrl: 'user/register/skills/skills.template.html',
            controller: 'SkillsPageController'
        };

        app.component('skillsPage', component);
    })();
});