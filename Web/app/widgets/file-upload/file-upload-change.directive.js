/**
 * Created by btrabon on 5/8/17.
 */

'use strict';

define(['./file-upload.module'], function(app) {
    (function() {
        var directive = function() {
            return {
                restrict: 'A',
                link: function(scope, element, attributes) {
                    var onChangeHandler = scope.$eval(attributes.fileUploadChange);
                    element.bind('change', onChangeHandler);
                }
            };
        };

        app.directive('fileUploadChange', directive);
    })();
});