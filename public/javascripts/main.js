$(() => {
    $('.message a').click(function () {
        $('.login-form').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $('.register-form').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
    });


});
function asyncLoaderDispatch() {
    $('#loading').animate({
        opacity: "toggle"
    }, "fast");
}