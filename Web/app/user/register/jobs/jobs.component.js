/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var component = {
            templateUrl: 'user/register/jobs/jobs.template.html',
            controller: 'JobsPageController'
        };

        app.component('jobsPage', component);
    })();
});