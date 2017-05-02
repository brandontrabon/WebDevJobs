/**
 * Created by btrabon on 5/2/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;
        };

        app.service('ProfilePageService', service);
    })();
});