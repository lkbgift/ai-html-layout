require.config({
  paths: {
    jquery: '../components/jquery/jquery'
  },
  shim: {
    "foundation/foundation" : { deps: ["jquery"] },
    "foundation/foundation.alerts": { deps: ["jquery"] },
    "foundation/foundation.clearing": { deps: ["jquery"] },
    "foundation/foundation.cookie": { deps: ["jquery"] },
    "foundation/foundation.dropdown": { deps: ["jquery"] },
    "foundation/foundation.forms": { deps: ["jquery"] },
    "foundation/foundation.joyride": { deps: ["jquery"] },
    "foundation/foundation.magellan": { deps: ["jquery"] },
    "foundation/foundation.orbit": { deps: ["jquery"] },
    "foundation/foundation.placeholder": { deps: ["jquery"] },
    "foundation/foundation.reveal": { deps: ["jquery"] },
    "foundation/foundation.section": { deps: ["jquery"] },
    "foundation/foundation.tooltips": { deps: ["jquery"] },
    "foundation/foundation.topbar": { deps: ["jquery"] }
  }
});

require(["jquery",
  "foundation/foundation",            
  "foundation/foundation.alerts",     
  "foundation/foundation.clearing",   
  "foundation/foundation.cookie",   
  "foundation/foundation.dropdown",   
  "foundation/foundation.forms",      
  "foundation/foundation.joyride",    
  "foundation/foundation.magellan",   
  "foundation/foundation.orbit",      
  "foundation/foundation.placeholder",
  "foundation/foundation.reveal",     
  "foundation/foundation.section",    
  "foundation/foundation.tooltips",   
  "foundation/foundation.topbar"
], function ($) {
  $(document).foundation('topbar');
  $('#brandslider').foundation('orbit', { timer_speed: 5000, stack_on_small: false, animation_speed: 750, timer: false, bullets: false, }, function (response) {});
  $('#case-sliders').foundation('orbit', {  stack_on_small: false, animation_speed: 750, bullets: false, bullets: true, }, function (response) {$('#case-sliders').find('.orbit-timer span').click();});
  $('#featrap').foundation('orbit', {  stack_on_small: false, animation_speed: 750, bullets: false, bullets: true, }, function (response) {$('#featrap').find('.orbit-timer span').click();});
});