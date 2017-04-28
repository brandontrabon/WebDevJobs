/**
 * Created by btrabon on 4/3/17.
 */

'use strict';

define(['angular', './register/register'], function(ng) {
    return (function() {
        var app = ng.module('user', ['register']);

        return app;
    })();
});