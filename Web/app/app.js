/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define([
    'angular',
    'ui.router',
    './user/user',
    './widgets/site-nav/site-nav',
    './widgets/search-box/search-box'
], function(ng) {
    return (function() {
        var app = ng.module('webDevJobs', [
            'ui.router',
            'user',
            'siteNav',
            'searchBox'
        ]);

        return app;
    })();
});