/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['./register.module'], function(app) {
    (function() {
        app.config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('base.user.register', {
                    url: '/register',
                    abstract: true,
                    templateUrl: 'user/register/register.template.html'
                })
                .state('base.user.register.userInfo', {
                    url: '/userinfo',
                    controller: 'UserInfoPageRouteController as uirc',
                    template: '<user-info-page></user-info-page>'
                })
                .state('base.user.register.upload', {
                    url: '/upload',
                    controller: 'UploadPageRouteController as urc',
                    template: '<upload-page></upload-page>'
                })
                .state('base.user.register.jobs', {
                    url: '/jobs',
                    controller: 'JobsPageRouteController as jrc',
                    template: '<jobs-page></jobs-page>'
                })
                .state('base.user.register.skills', {
                    url: '/skills',
                    controller: 'SkillsPageRouteController as src',
                    template: '<skills-page></skills-page>'
                });
        }]);
    })();
});