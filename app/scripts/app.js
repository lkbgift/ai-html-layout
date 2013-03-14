/*global define */
define([], function () {
    'use strict';
    $(document).foundation('topbar');
    $('#featured').foundation('orbit', { timer_speed: 5000, stack_on_small: false, animation_speed: 500, timer: false, bullets: true, }, function (response) {});
});