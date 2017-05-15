/**
 * Created by btrabon on 5/7/17.
 */

'use strict';

define(['./file-upload.module'], function(app) {
    (function() {
        var controller = function(FileUploadService, $scope) {
            var vm = this;

            vm.currentFiles = FileUploadService.currentFiles;

            vm.$onInit = onInit;
            vm.addFiles = FileUploadService.addFiles;
            vm.removeFile = FileUploadService.removeFile;
            vm.removeAllFiles = FileUploadService.removeAllFiles;

            function onInit() {
                FileUploadService.init($scope);
            }
        };

        controller.$inject = ['FileUploadService', '$scope'];

        app.controller('FileUploadController', controller);
    })();
});