jQuery(window).bind('scroll resize', function () {
    var currentSection = null;

    jQuery('.section').each(function () {
        var element = jQuery(this).attr('id');
        if (jQuery('#' + element).is('*')) {
            if (jQuery(window).scrollTop() >= jQuery('#' + element).offset().top - 90)
            {
                currentSection = element;
            }
        }
    });

    jQuery('#header-main-menu ul li').removeClass('active').find('a[href*="#' + currentSection + '"]').parent().addClass('active');
    jQuery('.menu-wrapper').removeClass(function (index, css) {
        return (css.match(/(^|\s)section-\S+/g) || []).join(' ');
    }).addClass('section-' + currentSection);
});

jQuery(document).ready(function () {
    jQuery(".menu-wrapper").sticky({topSpacing: 0});
    jQuery('#header-main-menu ul li a, .slow-scroll').click(function () {
        if (jQuery('.mob-menu').is(':visible'))
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 54}, 1500);
        } else
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top}, 1500);
        }
        return false;
    });

    jQuery(window).scrollTop(1);
    jQuery(window).scrollTop(0);
});

jQuery(document).resize(function () {

    jQuery('#header-main-menu ul li a, .slow-scroll').click(function () {
        if (jQuery('.mob-menu').is(':visible'))
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 54}, 1500);
        } else
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top}, 1500);
        }
        return false;
    });

});