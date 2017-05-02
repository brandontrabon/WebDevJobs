/**
 * Created by btrabon on 5/2/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var component = {
            templateUrl: 'user/register/profile/profile.template.html',
            controller: 'ProfilePageController'
        };

        app.component('profilePage', component);
    })();
});