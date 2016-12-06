var Templates = require('../Templates');
var authJS = require('./auth');

var $cont = $('#popup');

function initForm() {
    var html_code = Templates.FORM();

    var $node = $(html_code);


    $cont.append($node);
}

function destroyForm() {
    $cont.html("");
}

exports.initForm = initForm;
exports.destroyForm = destroyForm;