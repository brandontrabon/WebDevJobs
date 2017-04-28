/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;
        };

        app.service('UserInfoPageService', service);
    })();
});