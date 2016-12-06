var auth = firebase.auth();
var database = firebase.database();

var profileJS = require('./profile');

var datUser;

function singInGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

function singOut() {
    auth.signOut();
}

function onAuthStateChanged(user) {
    if (user) {
        // setUserData(user);
        $('#login-menu-btn').hide();
        $('#current-user').text(user.displayName);
        $('#currentUserBtn').show();
        // $('#profile-btn').click(function () {
        //     console.log('click-click');
        //     profileJS.showInfo(datUser);
        // });
        // console.log(user.uid);
        // getUser(user.uid);
        $('#signout-btn').click(function () {
            singOut();
        });


    } else {
        $('#currentUserBtn').hide();
        $('#login-menu-btn').show();
    }

}

 function setUserData(user) {

    var ref = database.ref('database/users/' + user.uid).set({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL || "https://firebasestorage.googleapis.com/v0/b/travel-web-project-b1596.appspot.com/o/person-placeholder.jpg?alt=media&token=68281f5f-4ec0-43de-9fab-c50a1eda171e",
        uid: user.uid
    });
}

function getUser(uid) {
    console.log("fack");
    var ref = database.ref('database/user'+uid);
    ref.off();
    var get_info = function (data) {
        datUser = data.val();
        console.log("asd")
        console.log(datUser);
    };
    ref.on('value', get_info);
}



exports.signInGoogle = singInGoogle;
exports.signOut = singOut;
exports.onAuthStateChanged = onAuthStateChanged;
exports.auth = auth;