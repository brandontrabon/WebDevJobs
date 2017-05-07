/**
 * Created by btrabon on 5/7/17.
 */

'use strict';

define(['./file-upload.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;
        };

        app.service('FileUploadService', service);
    })();
});