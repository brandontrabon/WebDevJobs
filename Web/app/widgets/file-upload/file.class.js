/**
 * Created by btrabon on 5/12/17.
 */

'use strict';

define([], function() {
    return (function() {
        var FileClass = function(name, size, type) {
            var vm = this;

            vm.name = name;
            vm.size = size;
            vm.type = type;
            vm.contents = undefined;
        };

        return FileClass;
    })();
});