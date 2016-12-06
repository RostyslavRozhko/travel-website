var Templates = require('../templates');
var cityJS = require('./city');

var database = firebase.database();

var cities = [];

function getSlider() {
    cities = [];
    var ref = database.ref('database/cities');

    ref.off();

    var get_info = function (data) {
        showOneItem(data.val());
    };

    ref.limitToLast(5).on('child_added', get_info);
}

var $slider_list = $('#slider-list');

function showSlider(sliderList) {
    $slider_list.html("");

    sliderList.forEach(showOneItem);
}

function showOneItem(slider) {
    cities.push(slider);
    var html_code = Templates.SLIDER({slider: slider});

    var $node = $(html_code);

    setBackground($node, slider.imageUrl);

    $node.click(function () {
        cityJS.updateCity(slider.name);
    });

    $slider_list.append($node);
}

function showOneItemSearch(slider) {
    var html_code = Templates.SLIDER({slider: slider});

    var $node = $(html_code);

    setBackground($node, slider.imageUrl);

    $node.click(function () {
        cityJS.updateCity(slider.name);
    });

    $slider_list.append($node);
}

function setBackground(node, photo) {
    var className = photo;
    var classElement = node.addClass(className);
    $(classElement).css('background-image', 'url(' + photo + ')');
}

function findByName(name) {
    $slider_list.html("");
    if(!name){ initSlider(cities); return;}
    cities.forEach(function (city) {
        var cityname = city.name.toLowerCase().substring(0, name.length);
        if(cityname==name) showOneItemSearch(city);
    });
}

function initSlider() {
    getSlider();
}

exports.initSlider = initSlider;
exports.findByName = findByName;