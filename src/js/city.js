var commentsJS = require('./comments');
var overviewJS = require('./overview');

var LocalStorage = require('../LocalStorage');
const LocalStorageKey = "LocalStorageKey";


var database = firebase.database();


function getComments(cityName) {
    $('#comment-list').html("");
    var commentRef = database.ref('database/cities/'+cityName+'/comments');
    commentRef.off();
    var get_info = function (data) {
        getAuthor(data.val());
    };
    commentRef.on('value', get_info);

    function getAuthor(val) {
        function getCurrentUser(currentComment) {
            var refUser = database.ref('database/users/' + currentComment.author);

            refUser.off();
            function get_user(data) {
                commentsJS.initComments({comment: currentComment, author: data.val()});
            }

            refUser.on('value', get_user);
        }
        val.forEach(getCurrentUser);
    }
}

function getOverview(cityName) {
    var ref = database.ref('database/cities/'+cityName);

    var get_data = function (data) {
        overviewJS.initOverview(data.val());
    };

    ref.on('value', get_data);
}

function updateCity(cityName) {
    commentsJS.flushArray();
    LocalStorage.set(LocalStorageKey, cityName);
    getComments(cityName);
    getOverview(cityName);
}

function init() {
    var localStorage = LocalStorage.get(LocalStorageKey);
    if(localStorage){
        updateCity(localStorage);
    }
    else {
        LocalStorage.set(LocalStorageKey, 'New-York');
        updateCity('New-York');
    }
}

exports.init = init;
exports.updateCity = updateCity;