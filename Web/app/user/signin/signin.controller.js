/**
 * Created by btrabon on 4/6/17.
 */

'use strict';

define(['../user.module'], function(app) {
    (function() {
        var controller = function(SigninPageService) {
            var vm = this;
        };

        controller.$inject = ['SigninPageService'];

        app.controller('SigninPageController', controller);
    })();
});