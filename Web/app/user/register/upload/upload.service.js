/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var service = function(RegisterBaseService) {
            var vm = this;

            vm.init = init;
            vm.addForm = RegisterBaseService.addForm;
            vm.buildErrorObject = RegisterBaseService.buildErrorObject;
            vm.clearErrorObject = RegisterBaseService.clearErrorObject;

            function init(pageChangeCallback) {
                RegisterBaseService.addCallback(pageChangeCallback);
            }
        };

        service.$inject = ['RegisterBaseService'];

        app.service('UploadPageService', service);
    })();
});