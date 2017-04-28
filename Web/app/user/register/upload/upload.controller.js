/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var controller = function(UploadPageService) {
            var vm = this;
        };

        controller.$inject = ['UploadPageService'];

        app.controller('UploadPageController', controller);
    })();
});