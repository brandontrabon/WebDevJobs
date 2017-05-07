/**
 * Created by btrabon on 5/2/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var component = {
            templateUrl: 'user/register/portfolio/portfolio.template.html',
            controller: 'ProfilePageController'
        };

        app.component('portfolioPage', component);
    })();
});