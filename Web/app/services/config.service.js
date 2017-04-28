/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['../app'], function(app) {
    (function() {
        var service = function() {
            var vm = this;

            var baseUrl = 'http://localhost:3333/api/';

            vm.getDataUrl = getDataUrl;

            function getDataUrl(dataItem) {
                return baseUrl + dataItem;
            }
        };

        app.service('ConfigService', service);
    })();
});