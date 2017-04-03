/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define(['../user.module'], function(app) {
    (function() {
        var component = {
            templateUrl: 'user/home/home.template.html',
            controller: 'HomePageController',
            bindings: {

            }
        };

        app.component('homePage', component);
    })();
});