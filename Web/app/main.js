/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

require.config({
    paths: {
        'domReady': './bower_components/domReady/domReady',
        'angular': './bower_components/angular/angular',
        'ui.router': './bower_components/angular-ui-router/release/angular-ui-router',
        'bootstrap-sass-js': './bower_components/bootstrap-sass/assets/javascripts/bootstrap',
        'jquery': './bower_components/jquery/dist/jquery',
        'moment': './bower_components/moment/moment'
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'ui.router': {
            deps: ['angular']
        },
        'bootstrap-sass-js': {
            deps: ['jquery']
        }
    },
    deps: ['./bootstrap']
});