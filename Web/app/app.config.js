/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define(['./app'], function(app) {
    (function() {
        // any config related items need to be put here
        app.config(['$locationProvider', function($locationProvider) {
            $locationProvider.html5Mode(true);
        }]);
    })();
});