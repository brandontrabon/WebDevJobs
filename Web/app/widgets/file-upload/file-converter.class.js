/**
 * @description Converts an ArrayBuffer to a Base64 string and back.
 */

'use strict';

define([], function() {
    return (function () {

        var FileConverter = function() {
            var vm = this;

            vm.convertToBase64 = convertToBase64;

            function convertToBase64(arrayBuffer) {
                var binary = '';
                var bytes = new Uint8Array(arrayBuffer);
                var length = bytes.length;
                for (var i = 0; i < length; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }

                return window.btoa(binary);
            }
        };

        return FileConverter;
    })();
});