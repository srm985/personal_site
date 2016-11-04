$(document).ready(function() {
    windowWidth = $(window).width();

    $('.project_wrapper_half').mouseenter(function() {
        if (windowWidth > 991) {
            $(this).find('.project_title_half').addClass('project_title_half_hovered');
            $(this).find('.project_content_half').addClass('project_content_half_hovered');
        };
    });
    $('.project_wrapper_half').mouseleave(function() {
        if (windowWidth > 991) {
            $(this).find('.project_title_half').removeClass('project_title_half_hovered');
            $(this).find('.project_content_half').removeClass('project_content_half_hovered');
        };
    });

    $(window).resize(function() {
        windowWidth = $(window).width();
    });
});
