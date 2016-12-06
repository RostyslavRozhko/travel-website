var Templates = require('../templates');
var profileJS = require('./profile');

var $comment_list = $('#comment-list');
var $page_turner = $('#page-turner');

var length;

var comments = [];

function showCommentsList(commentsList) {
    $page_turner.html("");
    $comment_list.html("");
    if(commentsList.length<4) {
        commentsList.forEach(showOneComment);
    } else {
        addPages(commentsList.length);
    }
}

function addPages(length){
    pagesCounter = Math.ceil((length/3.0));
    for(i = 0; i<3;i++){
        showOneComment(comments[i]);
    }
    for(i = 1; i<=pagesCounter; i++) {
        if(i==1) {
            $page_turner.append(
                '<div id="' + i + '" class="page">' + i + '</div>'
            )
        } else {
            $page_turner.append(
                '<div id="' + i + '" class="page">' + i + '</div>'
            )
        }
    }
    $page_turner.find('.page').click(function () {
        showPage(parseInt($(this).attr('id'), 10));
        $(this).addClass('active');
    });
}

function showPage(count) {
    $comment_list.html("");
    for(i = count*3-3; i<count*3; i++){
        showOneComment(comments[i]);
    }
}

function showOneComment(obj) {
    var html_code = Templates.COMMENT_NODE({comment: obj.comment, author: obj.author});
    var $node = $(html_code);

    $node.find('.user-photo').click(function () {
        profileJS.showInfo(obj.author);
    });

    $comment_list.append($node);
}

function showProfileComment(author, commentsA, $list){
    $list.html('');

    function showOne(comment) {
        var html_code = Templates.COMMENT_NODE({comment: comment, author: author});

        var $node = $(html_code);

        $list.append($node);
    }
    commentsA.forEach(showOne);
}

function filterComments(selected) {
    if(selected==0) showCommentsList(comments.reverse());
    else {
        showCommentsList(comments.reverse());
    }
}



function init(oneComment) {
    comments.push(oneComment);
    showCommentsList(comments);
}


exports.initComments = init;
exports.showProfileComment = showProfileComment;
exports.showCommentsList = showCommentsList;
exports.showPage = showPage;
exports.filterComments = filterComments;
exports.flushArray = function () {
  comments = [];
};