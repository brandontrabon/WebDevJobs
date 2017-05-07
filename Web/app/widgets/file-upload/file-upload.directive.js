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
                controller: 'FileUploadController',
                controllerAs: 'vm',
                bindToController: {
                    uploadId: '@',
                    uploadTitle: '@'
                },
                templateUrl: 'widgets/file-upload/file-upload.template.html'
            };
        };

        app.directive('fileUpload', directive);
    })();
});