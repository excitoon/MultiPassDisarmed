var Popin = function() {
    'use strict';

    function init() {
    }

    return {
        'init': init
    }
}();

$(function () {
    Analytics.event('Popin', 'opened');
    Popin.init();
});
