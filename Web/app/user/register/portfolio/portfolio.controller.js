/**
 * Created by btrabon on 5/2/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var controller = function(PortfolioPageService) {
            var vm = this;

            vm.savedData = PortfolioPageService.savedData;

            vm.addPortfolioItem = PortfolioPageService.addPortfolioItem;
        };

        controller.$inject = ['PortfolioPageService'];

        app.controller('PortfolioPageController', controller);
    })();
});