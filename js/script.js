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
    })

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

    // renanum

    function sortMin(a, b) {
        return a - b;
    }

    function sortMax(a, b) {
        return b - a;
    }

    function changeBackground(element, mode) {
        var type = mode || 'even';
        element.removeClass(type).filter(':' + type).addClass(type);
    }

    function getItem() {
        var items = ['Blei', 'Eisen', 'Gold', 'Holz', 'Kohle', 'Kräuter', 'Leder', 'Rohglas', 'Tonerde', 'Balken', 'Bleirohre', 'Elfenbein', 'Fensterglas', 'Marmor', 'Naturstein', 'Statuen', 'Ziegel', 'Fischsauce', 'Getreide', 'Gewürze', 'Oliven', 'Olivenöl', 'Salz', 'Trauben', 'Wein', 'Esel', 'Geflügel', 'Pferde', 'Rinder', 'Schafe', 'Ziegen', 'Wilde Tiere', 'Amphoren', 'Geschirr', 'Heilsalbe', 'Möbel', 'Öllampen', 'Pergament', 'Schuhe', 'Schriftrollen', 'Flachs', 'Leinen', 'Mantel', 'Seide', 'Toga', 'Tuch', 'Tunika', 'Wolle', 'Karren', 'Pflug', 'Rüstungen', 'Segel', 'Waffen', 'Webstuhl', 'Werkzeug', 'Edelsteine', 'Farben', 'Glaswaren', 'Lehrschrift', 'Literatur', 'Parfüm', 'Prunkgefäße', 'Räucherwerk', 'Schmuck', 'Denare'];
        return items;
    }

    function getItemImage(item) {
        var items = getItem(),
            pixel = 25,
            pos = items.indexOf(item.replace('+', ''));
        return (pos == -1) ? '25px 0' : '0 ' + -(pos * pixel) + 'px';
    }

    function addEventDeleteRow(element) {
        if (element.length > 0) {
            element.find('span.delete').on('click', function() {
                $(this).closest('div').remove();
            });
        }
    }

    function cloneAppendTo(element) {
        var row = element.closest('section').children('header').children('div').clone().appendTo(element);
        addEventDeleteRow(row);
        return $(row);
    }

    function multiEmpty(value) {
        var x = parseFloat(value);
        return (x == false || x < 1 || x == '' || isNaN(x) ) ? 1 : x;
    }

    function getData() {
        obj.action = 'read';
        $.ajax({
            type:'POST',
            async:false,
            url:'app/core/home/json.renanum.php',
            cache:false,
            data:obj,
            dataType:'json',
            success:function(data) {
                obj = {};
                obj.items = data;
                ren_article.children('div').remove();
                for (var index in obj.items) {

                    var div = cloneAppendTo(ren_article),
                        tmp = obj.items[index][0];

                    for (var index2 in obj.items[index]) {
                        div.find('input:eq(' + index2 + ')').val(obj.items[index][index2]);
                    }

                    if (obj.items[index][0].lastIndexOf('+') != -1) {
                        div.find('span.item').append('<img src="img/renanum/star.png" />');
                    }

                    div.attr('id', 'row-' + index);
                    div.find('span.item').css({
                        'backgroundPosition':getItemImage(tmp)
                    });

                    var sellmin = div.find('input[name=sellmin]').val(),
                        selltop = multiEmpty(div.find('input[name=selltop]').val()),
                        buymax = multiEmpty(div.find('input[name=buymax]').val());

                    tmp = sellmin.indexOf('m');
                    if (tmp != -1) {
                        sellmin = multiEmpty(sellmin.slice(0, tmp)) + sellmin.slice(tmp + 1) / 60;
                    }
                    else {
                        sellmin = multiEmpty(sellmin);
                    }

                    div.find('span.diff').text(Math.round(selltop / buymax * 100) / 100);
                    div.find('span.profit').text(Math.round(selltop * 60 / sellmin * 10) / 10);
                    div.find('span.amount').text(Math.ceil(60 / sellmin * 24));
                    div.find('span.benefit').text(Math.ceil(selltop * div.find('span.amount').text()));
                }
                changeBackground(ren_article.children('div'), 'even');
            },
            error:function() {
                alert('error: read');
            }
        });
    }

    if ($('section.renanum').length > 0) {
        var ren_section = $('section.renanum'),
            ren_copydiv = $('section.renanum header section'),
            ren_article = $('section.renanum article'),
            obj = {};

        // sort functions

        ren_section.children('nav').find('.sort').on('click', function() {
            var sortArr = [],
                sortTag = ren_article.find('.' + $(this).data('sort'));
            sortTag.each(function() {
                var sort = $(this),
                    div = sort.closest('div'),
                    text = (sortTag[0].tagName == 'SPAN') ? sort.text() : sort.val();
                sortArr.push({
                    sortvalue:text.replace('m',''),
                    datarowid:div.attr('id')
                });
            });

            if (isNaN(sortArr[0].sortvalue)) {
                sortArr.sort(function(a, b) {
                    var nameA = a.sortvalue.toLowerCase(),
                        nameB = b.sortvalue.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
            else {
                sortArr.sort(function(a, b) {
                    return b.sortvalue - a.sortvalue;
                });
            }
            for (var index in sortArr) {
                $('#' + sortArr[index].datarowid).appendTo(ren_copydiv);
            }
            ren_copydiv.children().appendTo(ren_article);
            changeBackground(ren_article.children('div'), 'even');
        });

        getData();
        ren_article.sortable({
            opacity:0.6,
            items:'div',
            update:function() {
                changeBackground(ren_article.children('div'), 'even');
            }
        });

        addEventDeleteRow(ren_section);
        ren_section.find('button[name=adds]').on('click', function() {
            var ren_lastrow = cloneAppendTo(ren_article);
            $(ren_lastrow).find('input.items').focus();
        });
        ren_section.find('button[name=save]').on('click', function() {
            obj = {};
            obj.action = 'write';
            obj.items = [];
            ren_article.children('div').each(function(i) {
                var row = {};
                $(this).find('input').each(function() {
                    row[$(this).attr('name')] = $(this).val();
                });
                obj.items.push(row);
            });

            $.ajax({
                type:'POST',
                async:false,
                url:'app/core/home/json.renanum.php',
                cache:false,
                data:obj,
                dataType:'json',
                success:function(data) {
                    console.log('save ' + data);
                    obj = {};
                    getData();
                },
                error:function() {
                    alert('error: save');
                }
            });
        });
    }

})();