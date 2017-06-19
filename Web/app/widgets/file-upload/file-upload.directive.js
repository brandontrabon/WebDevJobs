/**
 * Created by btrabon on 5/7/17.
 */

'use strict';

define(['./file-upload.module'], function(app){
    (function() {
        var directive = function() {
            return {
                restrict: 'E',
                scope: {},
                require: ['fileUpload', 'ngModel'],
                controller: 'FileUploadController',
                controllerAs: 'vm',
                bindToController: {
                    uploadId: '@',
                    uploadTitle: '@'
                },
                templateUrl: 'widgets/file-upload/file-upload.template.html',
                link: function(scope, element, attributes, controllers) {
                    var fileUploadController = controllers[0];
                    var ngModelController = controllers[1];

                    fileUploadController.setupNgModel(ngModelController);
                }
            };
        };

        app.directive('fileUpload', directive);
    })();
});