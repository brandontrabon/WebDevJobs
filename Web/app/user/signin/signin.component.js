/**
 * Created by btrabon on 4/6/17.
 */

'use strict';

define(['../user.module'], function(app) {
    (function() {
        var component = {
            templateUrl: 'user/signin/signin.template.html',
            controller: 'SigninPageController',
            bindings: {

            }
        };

        app.component('signinPage', component);
    })();
});