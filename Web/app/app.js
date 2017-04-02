/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define([
    'angular',
    'ui.router'
], function(ng) {
    return (function() {
        var app = ng.module('webDevJobs', [
            'ui.router'
        ]);

        return app;
    })();
});