$(function(){
    var cityJS = require('./js/city');
    var sliderJS = require('./js/slider');
    var listenersJS = require('./js/listeners');
    var mapJS = require('./js/map');
    // var authJS = require('./js/auth');

    cityJS.init();
    sliderJS.initSlider();
    listenersJS.initListeners();
    mapJS.initialize();

    // authJS.auth.onAuthStateChanged(authJS.onAuthStateChanged);
    function showPage(id){
        commentJS.showPage(id);
    }


});