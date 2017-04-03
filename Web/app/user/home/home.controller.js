/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define(['../user.module'], function(app) {
    (function() {
        var controller = function(HomePageService) {
            var vm = this;
        };

        controller.$inject = ['HomePageService'];

        app.controller('HomePageController', controller);
    })();
});