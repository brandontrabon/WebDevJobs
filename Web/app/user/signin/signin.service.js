/**
 * Created by btrabon on 4/6/17.
 */

'use strict';

define(['../user.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;
        };

        app.service('SigninPageService', service);
    })();
});