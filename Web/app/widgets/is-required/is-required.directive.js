/**
 * Created by btrabon on 5/25/17.
 */

'use strict';

define(['../../app'], function(app) {
    (function() {
        var directive = function($parse, $compile) {
            return {
                restrict: 'A',
                link: function(scope, element, attributes) {
                    var val = $parse(attributes.isRequired)(scope);
                    var isRequired = val || false;
                    console.log('isRequired ', isRequired);

                    if (isRequired === true || isRequired === 'true') {
                        element.attr('required');
                        $compile(element)(scope);
                    }
                }
            };
        };

        directive.$inject = ['$parse', '$compile'];

        app.directive('isRequired', directive);
    })();
});