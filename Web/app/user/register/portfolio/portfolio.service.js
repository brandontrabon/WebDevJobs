/**
 * Created by btrabon on 5/2/17.
 */

'use strict';

define(['../register.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;

            vm.savedData = {
                portfolio: []
            };

            vm.addPortfolioItem = addPortfolioItem;

            function addPortfolioItem() {
                var item = {
                    link: '',
                    description: ''
                };

                vm.savedData.portfolio.push(item);
            }
        };

        app.service('PortfolioPageService', service);
    })();
});