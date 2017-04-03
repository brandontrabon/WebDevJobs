/**
 * Created by btrabon on 4/4/17.
 */

'use strict';

define(['./search-box.module'], function(app) {
    (function() {
        var controller = function(SearchBoxService) {
            var vm = this;
        }

        controller.$inject = ['SearchBoxService'];

        app.controller('SearchBoxController', controller);
    })();
});