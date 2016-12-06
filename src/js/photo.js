var Templates = require('../templates');

var $cont = $('#popup');

function showPhoto(url) {
    var html_code = Templates.PHOTO({photo:url})

    var $node = $(html_code);

    $cont.append($node);
}

exports.showPhoto = showPhoto;