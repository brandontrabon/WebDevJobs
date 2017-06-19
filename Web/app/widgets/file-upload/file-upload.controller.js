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
            vm.setupNgModel = setupNgModel;
            vm.addFiles = FileUploadService.addFiles;
            vm.removeFile = FileUploadService.removeFile;
            vm.removeAllFiles = FileUploadService.removeAllFiles;

            function onInit() {
                FileUploadService.init($scope);
            }

            function setupNgModel(ngModelController) {
                if (!ngModelController)
                    return;

                ngModelController.$formatters.push(function(modelValue) {
                    console.log('formatter modelValue ', modelValue);
                    if (modelValue) {
                        vm.currentFiles = [];

                        if (modelValue.length) {
                            for (var i = 0, length = modelValue.length; i < length; i++) {
                                vm.currentFiles.push(modelValue[i]);
                            }
                        }
                    }
                });

                ngModelController.$parsers.push(function(viewValue) {
                    console.log('parsers viewValue ', viewValue);
                    return {
                        currentFiles: viewValue.currentFiles
                    };
                });

                $scope.$watch('currentFiles', function() {
                    console.log('currentFiles ', vm.currentFiles);
                    ngModelController.$setViewValue({
                        currentFiles: vm.currentFiles
                    });
                });
            }
        };

        controller.$inject = ['FileUploadService', '$scope'];

        app.controller('FileUploadController', controller);
    })();
});