var fs = require('fs');
var ejs = require('ejs');


exports.COMMENT_NODE = ejs.compile(fs.readFileSync('src/ejs/comments.ejs', "utf8"));
exports.OVERVIEW = ejs.compile(fs.readFileSync('src/ejs/overview.ejs', 'utf8'));
exports.SLIDER = ejs.compile(fs.readFileSync('src/ejs/slider.ejs', 'utf8'));
exports.FORM = ejs.compile(fs.readFileSync('src/ejs/form.ejs', 'utf8'));
exports.PROFILE = ejs.compile(fs.readFileSync('src/ejs/profile.ejs', 'utf8'));
exports.PHOTO =  ejs.compile(fs.readFileSync('src/ejs/photo.ejs', 'utf8'));