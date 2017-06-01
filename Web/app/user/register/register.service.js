/**
 * Created by btrabon on 4/26/17.
 */

'use strict';

define(['./register.module'], function(app) {
    (function() {
        var service = function() {
            var vm = this;

            vm.$state;

            vm.callbacks = [];
            vm.forms = [];
            vm.registration = {
                errors: []
            };
            vm.progressInformation = {
                currentStep: 1,
                isFirstStep: true,
                isLastStep: false
            };

            vm.init = init;
            vm.addCallback = addCallback;
            vm.addForm = addForm;
            vm.nextStep = nextStep;
            vm.previousStep = previousStep;
            vm.setUserInformation = setUserInformation;
            vm.uploadResume = uploadResume;
            vm.setJobInformation = setJobInformation;
            vm.setSkillInformation = setSkillInformation;
            vm.setPortfolioInformation = setPortfolioInformation;
            vm.save = save;
            vm.buildErrorObject = buildErrorObject;
            vm.clearErrorObject = clearErrorObject;

            function init($state) {
                vm.$state = $state;
            }

            function addCallback(callback) {
                vm.callbacks.push(callback);
            }

            function addForm(form) {
                // if a form isn't added for the current step then add it
                if (!vm.forms[(vm.progressInformation.currentStep - 1)])
                    vm.forms.push(form);
            }

            function nextStep() {
                clearErrorObject();

                if (vm.callbacks[(vm.progressInformation.currentStep - 1)]) {
                    if (vm.callbacks[(vm.progressInformation.currentStep - 1)]() === true) {
                        vm.progressInformation.currentStep++;
                        changeState();
                    } else {
                        // form validation failed so lets tell the user why
                        console.log('current step ', vm.progressInformation.currentStep);
                        console.log('forms ', vm.forms);
                        buildErrorObject(vm.forms[(vm.progressInformation.currentStep - 1)].$error);
                    }
                } else {
                    vm.progressInformation.currentStep++;
                    changeState();
                }
            }

            function previousStep() {
                if (vm.callbacks[(vm.progressInformation.currentStep - 1)]) {
                    if (vm.callbacks[(vm.progressInformation.currentStep - 1)]() === true) {
                        vm.progressInformation.currentStep--;
                        changeState();
                    }
                } else {
                    vm.progressInformation.currentStep--;
                    changeState();
                }
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
                        vm.progressInformation.isFirstStep = true;
                        vm.progressInformation.isLastStep = false;

                        break;
                    case 2:
                        stateName = 'base.user.register.upload';
                        vm.progressInformation.isFirstStep = false;
                        vm.progressInformation.isLastStep = false;

                        break;
                    case 3:
                        stateName = 'base.user.register.jobs';
                        vm.progressInformation.isFirstStep = false;
                        vm.progressInformation.isLastStep = false;

                        break;
                    case 4:
                        stateName = 'base.user.register.skills';
                        vm.progressInformation.isFirstStep = false;
                        vm.progressInformation.isLastStep = false;

                        break;
                    case 5:
                        stateName = 'base.user.register.portfolio';
                        vm.progressInformation.isFirstStep = false;
                        vm.progressInformation.isLastStep = true;

                        break;
                }

                return stateName;
            }

            function buildErrorObject(formErrors) {
                var errorKeys = Object.keys(formErrors);
                vm.registration.errors = [];

                if (errorKeys.indexOf('required') > -1) {
                    var requiredErrors = {
                        "header": "These fields are required",
                        "fields": []
                    };

                    for (var i = 0, length = formErrors.required.length; i < length; i++) {
                        requiredErrors.fields.push(formErrors.required[i].$$element[0].placeholder);
                    }

                    vm.registration.errors.push(requiredErrors);
                }

                if (errorKeys.indexOf('email') > -1) {
                    var emailErrors = {
                        "header": "Invalid emails",
                        "fields": []
                    };

                    for (var j = 0, length = formErrors.email.length; j < length; j++) {
                        console.log('email error ', formErrors.email[j]);
                        emailErrors.fields.push(formErrors.email[j].$$element[0].placeholder);
                    }

                    vm.registration.errors.push(emailErrors);
                }
            }

            function clearErrorObject() {
                vm.registration.errors = [];
            }
        };

        app.service('RegisterBaseService', service);
    })();
});