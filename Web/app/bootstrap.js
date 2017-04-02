/**
 * Created by btrabon on 4/1/17.
 */

'use strict';

define(['require', 'angular', './index'], function(require, ng) {
    require(['domReady!'], function(document) {
        ng.bootstrap(document, ['webDevJobs']);
    });
});