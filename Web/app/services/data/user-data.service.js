/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['../../app'], function(app) {
    (function() {
        var service = function($http, ConfigService) {
            var vm = this;

            vm.data = {};

            vm.getUserByName = getUserByName;
            vm.save = save;

            function getUserByName(name) {
                return $http.get(ConfigService.getDataUrl('user/' + name)).then(
                    function(response) {
                        vm.data = response.data;
                    },
                    function(error) {
                        console.error(error);
                    }
                );
            }

            function save(user) {
                return $http.post(ConfigService.getDataUrl('user'), user).then(
                    function(response) {
                        vm.data = response.data;
                    },
                    function(error) {
                        console.error(error);
                    }
                )
            }
        };

        service.$inject = ['$http', 'ConfigService'];

        app.service('UserDataService', service);
    })();
});