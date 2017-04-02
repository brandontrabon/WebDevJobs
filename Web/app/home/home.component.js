/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define(['../app'], function(app) {
    (function() {
        var component = {
            templateUrl: 'home/home.template.html',
            controller: 'HomePageController',
            bindings: {

            }
        };

        app.component('homePage', component);
    })();
});