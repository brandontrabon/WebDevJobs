/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var component = {
            templateUrl: 'user/register/user-info/user-info.template.html',
            controller: 'UserInfoPageController'
        };

        app.component('userInfoPage', component);
    })();
});