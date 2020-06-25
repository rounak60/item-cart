$('.card-head-title').click(function() {
    $(this).toggleClass('style-border').parent().siblings().children().removeClass('style-border');
});