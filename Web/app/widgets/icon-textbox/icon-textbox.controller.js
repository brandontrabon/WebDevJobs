/**
 * Created by btrabon on 4/25/17.
 */

'use strict';

define(['./icon-textbox.module'], function(app) {
    (function() {
        var controller = function() {
            var vm = this;

            vm.$onInit = onInit;

            function onInit() {
                // set the isRequired field to a default value
                vm.inputRequired = vm.inputRequired || false;
            }
        };

        app.controller('IconTextboxController', controller);
    })();
});