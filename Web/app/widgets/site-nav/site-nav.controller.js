/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define(['./site-nav.module'], function(app) {
    (function() {
        var controller = function() {
            var vm = this;

            vm.$onInit = onInit;

            function onInit() {

            }
        };

        controller.$inject = ['SiteNavService'];

        app.controller('SiteNavController', controller);
    })();
});