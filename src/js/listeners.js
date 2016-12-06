var formJS = require('./form');
var commentJS = require('./comments');
var sliderJS = require('./slider');
var mapJS = require('./map');

function initListeners() {
    $("#login-menu-btn").click(function () {
        formJS.initForm();
    });

    $("#popup").click(function (evt) {

        if ($(evt.target).closest('#login-form').length)
            return;
        if ($(evt.target).closest('.profile-row').length)
            return;
        if ($(evt.target).closest('.full-photo').length)
            return;

        formJS.destroyForm();
    });

    $('#carousel').carousel();

    $('.carousel-control').click(function(e){
        e.preventDefault();
        $('#carousel').carousel( $(this).data() );
    });

    $(document).ready(function(){
        var scroll_start = 0;
            $(document).scroll(function() {
                scroll_start = $(this).scrollTop();
                if(scroll_start > 50) {
                    $(".my-row").css({'background-color':'white','box-shadow': '0px 1px 10px 0px rgba(0,0,0,0.50)'});
                } else {
                    $('.my-row').css({'background-color': 'transparent', 'box-shadow':'none'});
                }
            });
    });

    var $select = $('.down-menu');
    $select.on('change', function () {
        var selected = $select.prop('selectedIndex');
        commentJS.filterComments(selected);
    });

    $('.search-query').keyup(function () {
        sliderJS.findByName($('.search-query').val())
    })

}

exports.initListeners = initListeners;