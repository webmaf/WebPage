/**
 * === REMANUM (remanum) ===
 */

//var items = ['Blei', 'Eisen', 'Gold', 'Holz', 'Kohle', 'Kräuter', 'Leder', 'Rohglas', 'Tonerde', 'Balken', 'Bleirohre', 'Elfenbein', 'Fensterglas', 'Marmor', 'Naturstein', 'Statuen', 'Ziegel', 'Fischsauce', 'Getreide', 'Gewürze', 'Oliven', 'Olivenöl', 'Salz', 'Trauben', 'Wein', 'Esel', 'Geflügel', 'Pferde', 'Rinder', 'Schafe', 'Ziegen', 'Wilde Tiere', 'Amphoren', 'Geschirr', 'Heilsalbe', 'Möbel', 'Öllampen', 'Pergament', 'Schuhe', 'Schriftrollen', 'Flachs', 'Leinen', 'Mantel', 'Seide', 'Toga', 'Tuch', 'Tunika', 'Wolle', 'Karren', 'Pflug', 'Rüstungen', 'Segel', 'Waffen', 'Webstuhl', 'Werkzeug', 'Edelsteine', 'Farben', 'Glaswaren', 'Lehrschrift', 'Literatur', 'Parfüm', 'Prunkgefäße', 'Räucherwerk', 'Schmuck', 'Denare'];


function getList() {

    var list = [
        {item:'Blei', category:2},
        {item:'Eisen', category:2},
        {item:'Gold', category:2, extras:['Kohle']},
        {item:'Holz', category:2},
        {item:'Kohle', category:2},
        {item:'Kräuter', category:2},
        {item:'Leder', category:2, extras:['Rinder', 'Salz']},
        {item:'Rohglas', category:2},
        {item:'Tonerde', category:2},
        {item:'Balken', category:0, extras:['Holz']},
        {item:'Bleirohre', category:0, extras:['Blei']},
        {item:'Elfenbein', category:0},
        {item:'Fensterglas', category:0, extras:['Rohglas', 'Blei']},
        {item:'Marmor', category:0, extras:['Werkzeug']},
        {item:'Naturstein', category:0},
        {item:'Statuen', category:0, extras:['Werkzeug', 'Naturstein']},
        {item:'Ziegel', category:0, extras:['Kohle']},
        {item:'Fischsauce', category:6, extras:['Amphoren', 'Salz']},
        {item:'Getreide', category:6, extras:['Pflug']},
        {item:'Gewürze', category:6},
        {item:'Oliven', category:6},
        {item:'Olivenöl', category:6, extras:['Amphoren', 'Oliven']},
        {item:'Salz', category:6},
        {item:'Trauben', category:6},
        {item:'Wein', category:6, extras:['Amphoren', 'Trauben']},
        {item:'Esel', category:4},
        {item:'Geflügel', category:4},
        {item:'Pferde', category:4, extras:['Getreide']},
        {item:'Rinder', category:4},
        {item:'Schafe', category:4},
        {item:'Ziegen', category:4},
        {item:'Wilde Tiere', category:4},
        {item:'Amphoren', category:7, extras:['Tonerde']},
        {item:'Geschirr', category:7, extras:['Tonerde', 'Kohle']},
        {item:'Heilsalbe', category:7, extras:['Kräuter', 'Olivenöl']},
        {item:'Möbel', category:7, extras:['Balken', 'Werkzeug']},
        {item:'Öllampen', category:7, extras:['Rohglas', 'Tonerde']},
        {item:'Pergament', category:7, extras:['Kräuter', 'Ziegen']},
        {item:'Schuhe', category:7, extras:['Leder']},
        {item:'Schriftrollen', category:7},
        {item:'Flachs', category:5},
        {item:'Leinen', category:5, extras:['Flachs', 'Webstuhl']},
        {item:'Mantel', category:5, extras:['Farben', 'Tuch']},
        {item:'Seide', category:5},
        {item:'Toga', category:5, extras:['Farben', 'Seide']},
        {item:'Tuch', category:5, extras:['Wolle', 'Webstuhl']},
        {item:'Tunika', category:5, extras:['Leinen']},
        {item:'Wolle', category:5},
        {item:'Karren', category:3, extras:['Holz', 'Leder']},
        {item:'Pflug', category:3, extras:['Balken', 'Eisen']},
        {item:'Rüstungen', category:3, extras:['Leinen', 'Tuch', 'Leder']},
        {item:'Segel', category:3, extras:['Leinen', 'Tuch']},
        {item:'Waffen', category:3, extras:['Kohle', 'Eisen']},
        {item:'Webstuhl', category:3, extras:['Werkzeug', 'Holz']},
        {item:'Werkzeug', category:3, extras:['Eisen']},
        {item:'Edelsteine', category:1},
        {item:'Farben', category:1, extras:['Amphoren', 'Kräuter']},
        {item:'Glaswaren', category:1, extras:['Rohglas', 'Kohle']},
        {item:'Lehrschrift', category:1, extras:['Pergament', 'Geflügel']},
        {item:'Literatur', category:1, extras:['Schriftrollen', 'Öllampen']},
        {item:'Parfüm', category:1},
        {item:'Prunkgefäße', category:1, extras:['Gold', 'Glaswaren']},
        {item:'Räucherwerk', category:1},
        {item:'Schmuck', category:1, extras:['Gold', 'Edelsteine']}
    ];

    list.push({item:'Denare', category:9});
    return list;
}


function getItem() {

    var items = getList(),
        array = [];
    for (var i = 0; i < items.length; i++) {
        array.push(items[i].item);
    }
    return array;
}


function getItemId(item) {

    return getItem().indexOf(item.replace('+', ''));
}


function getItemName(id) {

    return getItem()[id];
}


function getItemImage(item) {

    var pixel = 25,
        pos = getItemId(item);
    return (pos == -1) ? '25px 0' : '0 ' + -(pos * pixel) + 'px';
}


function getItemCategory(item) {

    var id = (isNaN(item)) ? getItemId(item) : item;
    return getCategory()[id];
}


function getItemsByExtras(item) {

    var items = getList(),
        array = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].hasOwnProperty('extras')) {
            var pos = items[i].extras.lastIndexOf(item);
            if (pos !== -1) {
                array.push(items[i].item);
            }
        }
    }
    return array;
}


function getCategoryItems(category) {

    var id = (isNaN(category)) ? getCategoryId(category) : category,
        cat = getList(),
        array = [];
    for (var i = 0; i < cat.length; i++) {
        if (cat[i].hasOwnProperty('category')) {
            if (cat[i].category == id) {
                array.push(cat[i].item);
            }
        }
    }
    return array;
}


function getCategory() {

    return ['Baumaterial', 'Luxuswaren', 'Rohstoffe', 'Ausrüstung', 'Tiere', 'Textilien', 'Nahrungsmittel', 'Gebrauchtwaren', 'Legionswaren', 'Währung'];
}


function getCategoryId(category) {

    return getCategory().indexOf(category);
}


function getCategoryName(id) {

    return getCategory()[id || 9];
}


function getCategoryColor(id) {

    var color = ['CCCCDD', 'CCDDCC', 'CCCCCC', 'DDCCCC', 'DDDCCC', 'CC88DD', 'CCDD88', '663300', '000000'];
    return color[id || 0];
}


function changeBackground(element, mode) {

    var type = mode || 'even';
    element.removeClass(type).filter(':' + type).addClass(type);
}


function addEventDeleteRow(element) {

    if (element.length > 0) {
        element.find('span.delete').on('click', function() {
            $(this).closest('div').remove();
        });
    }
}


function cloneAppendTo(element) {

    var row = element.closest('section').children('header').find('div').clone().appendTo(element);
    addEventDeleteRow(row);
    return row;
}


function multiEmpty(value) {

    var x = parseFloat(value);
    return (x == false || x < 1 || x == '' || isNaN(x) ) ? 1 : x;
}


function mouseOverItem(item, recursive) {

    var id = (isNaN(item)) ? getItemId(item) : item,
        obj = getList()[id],
        str = (!recursive) ? '<div class="row"><span class="icon item" style="background-position: ' + getItemImage(getItemName(id)) + ';"></span><span class="col-6">' + obj.item + '</span></div>' : '';

    if (obj.hasOwnProperty('extras')) {
        if (obj.extras.length > 0) {
            str += '<ul>';
            for (var i = 0; i < obj.extras.length; i++) {
                str += '<li>' +
                    '<div class="row">' +
                    '<span class="col-1">+</span>' +
                    '<span class="icon item" style="background-position: ' + getItemImage(obj.extras[i]) + ';"></span>' +
                    '<span class="column">' + obj.extras[i] + '</span>' +
                    '</div>' +
                    mouseOverItem(obj.extras[i], true) +
                    '</li>';
            }
            str += '</ul>';
        }
    }
    return str;
}


function createItemSpan(element, array) {

    for (var i = 0; i < array.length; i++) {
        $('<span class="icon item"></span>').css({
            'background-position':getItemImage(array[i])
        }).text(array[i]).appendTo(element);
    }
}


function createTooltip(element, tooltip) {

    element.find('.item').not('.right').on('mouseenter', function() {
        var moi = mouseOverItem($(this).text());
        tooltip.html('').append(moi).show();

        if ($(this).closest('section').hasClass('tradelist')) {
            $(this).on('mousemove', function(e) {
                var coordY = (e.pageY) ? e.pageY : window.event.y,
                    coordX = $(this).position().left,
                    reduce = Math.round(tooltip.height() / 2);
                tooltip.css({
                    top:(coordY - reduce) + 'px',
                    left:(coordX + 60) + 'px'
                });
            });
        }
        else {
            tooltip.css({
                top:(element.offset().top - 10) + 'px',
                left:'700px'
            });
        }
    });
    element.on('mouseleave', function() {
        tooltip.hide();
    });
}


function getData(obj, article, tooltip) {

    obj.action = 'read';

    $.ajax({
        type:'POST',
        async:false,
        url:'app/core/home/json.remanum.php',
        cache:false,
        data:obj,
        dataType:'json',
        success:function(data) {
            obj = {};
            obj.items = data;
            article.children('div').remove();
            for (var i = 0; i < obj.items.length; i++) {

                var div = cloneAppendTo(article),
                    tmp = obj.items[i][0];

                for (var j = 0; j < obj.items[i].length; j++) {
                    div.find('input:eq(' + j + ')').val(obj.items[i][j]);
                }

                div.attr('id', 'row-' + i);
                div.find('span.item').css({
                    'backgroundPosition':getItemImage(tmp)
                }).text(tmp);

                if (tmp.lastIndexOf('+') != -1) {
                    div.find('span.item').append('<img src="img/remanum/star.png" />');
                }

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
            changeBackground(article.children('div'), 'even');
            createTooltip(article, tooltip);
        },
        error:function() {
            alert('error: read');
        }
    });
}


function sortable(array) {

    var sortArr = array || [];

    if (isNaN(sortArr[0].sortvalue)) {
        sortArr = sortNumeric(sortArr);
    }
    else {
        sortArr = sortAlphabet(sortArr);
    }
    return sortArr;
}


function sortNumeric(array) {

    array.sort(function(a, b) {
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
    return array;
}


function sortAlphabet(array) {

    array.sort(function(a, b) {
        return b.sortvalue - a.sortvalue;
    });
    return array;
}

/**
 * Run if DOM are rendered
 */
(function() {

    if ($('#remanum').length > 0) {

        // global and navigation
        // =======================================================
        var tooltip = $('#remanum .tooltip');

        $('#remanum > nav li button').on('click', function() {
            var buttons = $('#remanum > nav li button'),
                section = $('#remanum > section'),
                isclass = ($(this).data('tab') == '') ? '' : '.' + $(this).data('tab');

            buttons.removeClass('active');
            $(this).addClass('active');
            section.hide().filter(isclass).show();
        });
        $('#remanum > nav li button').first().trigger('click');

        // tradelist
        // =======================================================
        var trade_section = $('#remanum .tradelist'),
            trade_copydiv = trade_section.find('header section'),
            trade_article = trade_section.find('article'),
            obj = {};

        // sort functions
        trade_section.children('nav').find('.sort').on('click', function() {
            var sortArr = [],
                sortTag = trade_article.find('.' + $(this).data('sort'));
            sortTag.each(function() {
                var sort = $(this),
                    div = sort.closest('div'),
                    text = (sortTag[0].tagName == 'SPAN') ? sort.text() : sort.val();
                sortArr.push({
                    sortvalue:text.replace('m', ''),
                    datarowid:div.attr('id')
                });
            });
            sortArr = sortable(sortArr);
            for (var i = 0; i < sortArr.length; i++) {
                $('#' + sortArr[i].datarowid).appendTo(trade_copydiv);
            }
            trade_copydiv.children().appendTo(trade_article);
            changeBackground(trade_article.children('div'), 'even');
        });

        // collect data
        getData(obj, trade_article, tooltip);
        trade_article.sortable({
            opacity:0.6,
            items:'div',
            update:function() {
                changeBackground(trade_article.children('div'), 'even');
            }
        });

        addEventDeleteRow(trade_section);

        // button functions
        trade_section.find('button[name=adds]').on('click', function() {
            var trade_lastrow = cloneAppendTo(trade_article);
            $(trade_lastrow).find('input.items').focus();
        });
        trade_section.find('button[name=save]').on('click', function() {
            obj = {};
            obj.action = 'write';
            obj.items = [];
            trade_article.children('div').each(function(i) {
                var row = {};
                $(this).find('input').each(function() {
                    row[$(this).attr('name')] = $(this).val();
                });
                obj.items.push(row);
            });

            $.ajax({
                type:'POST',
                async:false,
                url:'app/core/home/json.remanum.php',
                cache:false,
                data:obj,
                dataType:'json',
                success:function() {
                    obj = {};
                    getData(obj, trade_article, tooltip);
                },
                error:function() {
                    alert('error: save');
                }
            });
        });

        // productlist
        // =======================================================
        var prod_section = $('#remanum .productlist'),
            prod_copydiv = prod_section.find('header div'),
            prod_article = prod_section.find('article'),
            categoryName = getCategory(),
            categoryAdds = 'Verwendung';

        // remove Legionswaren and Währung
        categoryName = categoryName.slice(0, -2);

        // build Category and add Items
        for (var i = 0; i < categoryName.length; i++) {
            var div = prod_copydiv.clone().appendTo(prod_article),
                items = getCategoryItems(categoryName[i]);

            div.find('.product').text(categoryName[i]);
            createItemSpan(div, items);
        }
        if (categoryAdds != '') {
            div = prod_copydiv.clone().appendTo(prod_article).find('.product').text(categoryAdds).parent().addClass('production');
            prod_article.find('.item').on('click', function() {
                var items = getItemsByExtras($(this).text());
                items.splice(0, 0, $(this).text(), '');
                div.find('span').slice(1).remove();
                createItemSpan(div, items);
                div.find('.item').eq(1).attr('style', '').removeClass('icon item').addClass('col-10').text('benötigt für');
            });
        }
        createTooltip(prod_article, tooltip);

    }
})();