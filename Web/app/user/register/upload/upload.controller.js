/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var controller = function(UploadPageService, $scope) {
            var vm = this;

            vm.$onInit = onInit;

            function onInit() {
                UploadPageService.init(pageChangeCallback);

                $scope.$watch('files', function(value) {
                    console.log('upload files ', value);
                });
            }

            function pageChangeCallback() {
                UploadPageService.addForm(vm.form);

                return vm.form.$valid;
            }
        };

        controller.$inject = ['UploadPageService', '$scope'];

        app.controller('UploadPageController', controller);
    })();
});