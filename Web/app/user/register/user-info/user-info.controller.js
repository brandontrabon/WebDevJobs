/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var controller = function(UserInfoPageService) {
            var vm = this;
        };

        controller.$inject = ['UserInfoPageService'];

        app.controller('UserInfoPageController', controller);
    })();
});