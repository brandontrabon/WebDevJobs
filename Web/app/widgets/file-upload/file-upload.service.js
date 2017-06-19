/**
 * Created by btrabon on 5/7/17.
 */

'use strict';

define(['./file-upload.module', './file.class', './file-converter.class'], function(app, File, FileConverter) {
    (function() {
        var service = function() {
            var vm = this;

            vm.currentFiles = [];

            vm.init = init;
            vm.addFiles = addFiles;
            vm.removeFile = removeFile;
            vm.removeAllFiles = removeAllFiles;

            function init($scope) {
                vm.$scope = $scope;
            }

            function addFiles(event) {
                if (event.target.files) {
                    var files = event.target.files;
                    for (var i = 0, length = files.length; i < length; i++) {
                        var file = new File(files[i].name, files[i].size, files[i].type);
                        var fileConverter = new FileConverter();
                        var reader = new FileReader();

                        reader.onload = (function() {
                            return function(e) {
                                file.fileContents = fileConverter.convertToBase64(e.target.result);
                                console.log('uploaded file ', file);
                            };
                        })(files[i]);

                        reader.readAsArrayBuffer(files[i]);
                        vm.currentFiles.push(files[i]);
                    }
                }

                vm.$scope.$apply();
            }

            function removeFile(file) {
                for (var i = 0, length = vm.currentFiles.length; i < length; i++) {
                    if (vm.currentFiles[i].$$hashKey === file.$$hashKey) {
                        vm.currentFiles.splice(i, 1);
                        break;
                    }
                }
            }

            function removeAllFiles() {
                vm.currentFiles.splice(0, vm.currentFiles.length);
            }
        };

        app.service('FileUploadService', service);
    })();
});