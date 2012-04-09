/**
 * Author: webmaf
 * -------------------------------------------------------------------------------
 */


/**
 * Google Analytics
 */
/*var _gaq = [
 ['_setAccount', 'UA-XXXXX-X'],
 ['_trackPageview']
 ];
 (function(d, t) {
 var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
 g.src = ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js';
 s.parentNode.insertBefore(g, s)
 }(document, 'script'));*/

function hasAddClass(elements, from, to) {
    if (typeof to == 'undefined') {
        elements.toggleClass(from);
    }
    else {
        if (!elements.hasClass(from)) {
            elements.addClass(from);
        }
        elements.removeClass(to);
    }
}

/**
 * Run if DOM are rendered
 */
(function() {

    // auto-height from column of rows

    $('.row').each(function() {

        var height = 0,
            column = $(this).children('.column');

        column.each(function(i) {
            var current = $(this).height();
            height = (current > height) ? current : height;
        });
        column.height(height);
    });

    // navigation

    $('.navigation .col-border li').on('mouseenter',
        function() {
            $(this).find('a').animate({'margin-left':'4px'}, 250);
        }).on('mouseleave', function() {
            $(this).find('a').animate({'margin-left':'0'}, 100);
        });

    var col = $('.column ul'),
        nav = $('#blindnav nav').append('<ul></ul>');

    col.each(function() {

        var li = $(this).clone().children('.first'),
            sib = li.siblings().appendTo('<ul></ul>'),
            html = sib.parent().appendTo(li);

        nav.children('ul').append(html.parent());
    });

    nav.find('.first').on('click', function() {

        var ulAll = $(this).parent().find('ul').not(':hidden'),
            ulThis = $(this).find('ul');

        if (ulAll.length > 0) {
            ulAll.slideUp('fast', function() {
                ulThis.slideToggle('slow');
                ulThis.toggleClass('hide');
                ulAll.toggleClass('hide');
            });
        }
        else {
            ulThis.slideToggle('slow');
            ulThis.toggleClass('hide');
        }
        //ulThis.delay(5000).slideToggle('slow').toggleClass('hide');
    });

    // sidebar navi

    nav.on('mouseenter', function() {
        nav.css({width:''})
    });

    // checking formular

    $('.form-gray input').keyup(function() {

        var input = $(this),
            value = input.val().length;

        if (value == 0) {
            input.removeClass('error');
            input.removeClass('success');
            input.addClass('check');
        }
        else {
            input.removeClass('check');
            if (parseInt(value) < 10) {
                hasAddClass(input, 'error', 'success');
            }
            else {
                hasAddClass(input, 'success', 'error');
            }
        }
    });

    // create and activate Slider

    $(window).load(function() {
        if ($('html').not('.lt-ie8').length > 0) {

            var id = $('#slider-home'),
                container = id.find('.slider-screen ul'),
                slider = new Slider(container, id.find('.slider-nav'), id.width() || 960),
                button = slider.nav.find('button');

            button.on('click', function() {
                slider.setCurrent($(this).data('dir'));
                slider.transition();
            });
        }
    });

    // slider shit

    var id = $('#slider-top');
    var navi = id.find('.slider');
    var slider1 = new Slider(id, navi, 500);

})();