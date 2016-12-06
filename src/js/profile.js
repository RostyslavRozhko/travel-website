var Templates = require('../templates');
var commentSJS = require('./comments');

var database = firebase.database();

var profileComments = [];

var $cont = $('#popup');

function showInfo(author){
    getAuthorComments(author.uid);

    var html_code = Templates.PROFILE({author:author});

    var $node = $(html_code);

    commentSJS.showProfileComment(author, profileComments, $node.find('#profile-comment-list'));

    $cont.append($node);
}

function destroyProfile() {
    $cont.html("");
}

function getAuthorComments(id){
    var commentRef = database.ref('database/users/'+id+"/comments");
    commentRef.off();
    var get_info = function (data) {
        var val = data.val();
        profileComments = val;
    };
    commentRef.on('value', get_info);
}

exports.showInfo = showInfo;