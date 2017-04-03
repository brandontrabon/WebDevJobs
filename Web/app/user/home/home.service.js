/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define(['../user.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;
        };

        app.service('HomePageService', service);
    })();
});