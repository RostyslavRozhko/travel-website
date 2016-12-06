var Templates = require('../templates');
var photoJs = require('./photo');
var mapJS = require('./map');

var $overviewContainer = $('#overview_container');

function showOverview(info) {
    $overviewContainer.html("");

    var html_code = Templates.OVERVIEW({info:info});

    var $node = $(html_code);

    //Listeners
    var $photo = $node.find('.photo-item');
    $photo.click(function () {
        photoJs.showPhoto($(this).attr('src'));
    });

    $node.find('#addCityToMap').click(function () {
        mapJS.geocode(info.name);
    });


    $overviewContainer.append($node);
}

exports.initOverview = showOverview;