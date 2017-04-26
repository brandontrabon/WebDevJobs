/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['./register.module'], function(app) {
    (function() {
        app.config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('base.register', {
                    url: '/register',
                    abstract: true,
                    templateUrl: 'user/register/register.template.html'
                })
                .state('base.register.userInfo', {
                    url: '/userinfo',
                    controller: 'UserInfoRouteController as uirc',
                    template: '<user-info-page></user-info-page>'
                })
                .state('base.register.upload', {
                    url: '/upload',
                    controller: 'UploadRouteController as urc',
                    template: '<upload-page></upload-page>'
                })
                .state('base.register.jobs', {
                    url: '/jobs',
                    controller: 'JobsRouteController as jrc',
                    template: '<jobs-page></jobs-page>'
                })
                .state('base.register.skills', {
                    url: '/skills',
                    controller: 'SkillsRouteController as src',
                    template: '<skills-page></skills-page>'
                });
        }]);
    })();
});