/**
 * Created by btrabon on 4/27/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var component = {
            templateUrl: 'user/register/upload/upload.template.html',
            controller: 'UploadPageController'
        };

        app.component('uploadPage', component);
    })();
});