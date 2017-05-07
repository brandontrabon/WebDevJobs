/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['./register.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;

            vm.$state;

            vm.registration = {};
            vm.progressInformation = {
                currentStep: 1,
                isLastStep: false
            };

            vm.init = init;
            vm.nextStep = nextStep;
            vm.previousStep = previousStep;
            vm.setUserInformation = setUserInformation;
            vm.uploadResume = uploadResume;
            vm.setJobInformation = setJobInformation;
            vm.setSkillInformation = setSkillInformation;
            vm.setPortfolioInformation = setPortfolioInformation;
            vm.save = save;

            function init($state) {
                vm.$state = $state;
            }

            function nextStep() {
                vm.progressInformation.currentStep++;
                changeState();
            }

            function previousStep() {
                vm.progressInformation.currentStep--;
                changeState();
            }

            function changeState() {
                var nextState = getState();
                vm.$state.go(nextState);
            }

            function setUserInformation(user) {
                vm.registration.userInfo = user;
            }

            function uploadResume(file) {
                console.log(file);
            }

            function setJobInformation(jobs) {
                vm.registration.jobs = jobs;
            }

            function setSkillInformation(skills) {
                vm.registration.skills = skills;
            }

            function setPortfolioInformation(portfolios) {
                vm.registration.portfolios = portfolios;
            }

            function save() {

            }

            function getState() {
                var stateName = 'base.user.register.userInfo'; // default to the first state

                switch (vm.progressInformation.currentStep) {
                    case 1:
                        stateName = 'base.user.register.userInfo';
                        vm.progressInformation.isLastStep = false;
                        break;
                    case 2:
                        stateName = 'base.user.register.upload';
                        vm.progressInformation.isLastStep = false;
                        break;
                    case 3:
                        stateName = 'base.user.register.jobs';
                        vm.progressInformation.isLastStep = false;
                        break;
                    case 4:
                        stateName = 'base.user.register.skills';
                        vm.progressInformation.isLastStep = false;
                        break;
                    case 5:
                        stateName = 'base.user.register.portfolio';
                        vm.progressInformation.isLastStep = true;
                        break;
                }

                return stateName;
            }
        };

        app.service('RegisterService', service);
    })();
});