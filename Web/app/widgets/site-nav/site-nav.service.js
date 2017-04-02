/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define(['./site-nav.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;

            vm.init = init;

            function init() {

            }
        };

        app.service('SiteNavService', service);
    })();
});