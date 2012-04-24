/**
 * === REMANUM (remanum) ===
 */



function DataRemanum() {

    var cityLots,
        countryLots,
        estateLots,
        itemList,
        shortList,
        workingMedium;

    cityLots = [
        {name: 'Apotheke', category: 1, production: ['Heilsalbe'], upgrade: []},
        {name: 'Brennerei', category: 1, production: ['Amphoren'], upgrade: []},
        {name: 'Färberei', category: 1, production: ['Farben'], upgrade: []},
        {name: 'Garummanufaktur', category: 1, production: ['Fischsauce'], upgrade: []},
        {name: 'Gerberei', category: 1, production: ['Leder', 'Pergament'], upgrade: []},
        {name: 'Glasbläserei', category: 1, production: ['Fensterglas', 'Glaswaren'], upgrade: []},
        {name: 'Goldschmied', category: 1, production: ['Prunkgefäße', 'Schmuck'], upgrade: []},
        {name: 'Kelterei', category: 1, production: ['Wein'], upgrade: []},
        {name: 'Lederwerkstatt', category: 1, production: ['Rüstungen', 'Schuhe'], upgrade: []},
        {name: 'Schmied', category: 1, production: ['Waffen', 'Werkzeug'], upgrade: []},
        {name: 'Schneiderei', category: 1, production: ['Mantel', 'Toga', 'Tunika'], upgrade: []},
        {name: 'Schreibstube', category: 1, production: ['Lehrschrift', 'Literatur'], upgrade: []},
        {name: 'Schreinerei', category: 1, production: ['Möbel', 'Webstuhl'], upgrade: []},
        {name: 'Segelmacher', category: 1, production: ['Segel'], upgrade: []},
        {name: 'Spenglerei', category: 1, production: ['Bleirohre'], upgrade: []},
        {name: 'Steinmetz', category: 1, production: ['Statuen'], upgrade: []},
        {name: 'Stellmacher', category: 1, production: ['Karren', 'Pflug'], upgrade: []},
        {name: 'Sägewerk', category: 1, production: ['Balken'], upgrade: []},
        {name: 'Töpferei', category: 1, production: ['Geschirr', 'Öllampen'], upgrade: []},
//            upgrade: [
//                {denare: 1430, items: [ {name: 'Tonerde', amount: 240}, {name: 'Möbel', amount: 20} ], sale: 1500},
//                {denare: 4280, items: [ {name: 'Tonerde', amount: 720}, {name: 'Möbel', amount: 60} ]},
//                {denare: 7560, items: [ {name: 'Tonerde', amount: 1272}, {name: 'Möbel', amount: 106}, {name: 'Amphoren', amount: 784} ], sale: 8195},
//                {denare: 11550, items: [ {name: 'Tonerde', amount: 1937}, {name: 'Möbel', amount: 161}, {name: 'Amphoren', amount: 1194} ], sale: 19807},
//                {denare: 16550, items: [ {name: 'Tonerde', amount: 2777}, {name: 'Möbel', amount: 231}, {name: 'Amphoren', amount: 1712} ], sale: 37499},
//                {denare: 23100, items: [ {name: 'Naturstein', amount: 3467}, {name: 'Karren', amount: 130}, {name: 'Farbe', amount: 356} ], sale: 64642}
//            ]
//        },
        {name: 'Weberei', category: 1, production: ['Leinen', 'Tuch'], upgrade: []},
        {name: 'Ölpresse', category: 1, production: ['Olivenöl'], upgrade: []}
    ];

    countryLots = [
        {name: 'Eselzucht', category: 2, production: ['Esel'], upgrade: []},
        {name: 'Pferdezucht', category: 2, production: ['Pferde'], upgrade: []},
        {name: 'Schafzucht', category: 2, production: ['Schafe', 'Wolle'], upgrade: []},
//            upgrade: [
//                {denare: 950, items: [ {name: 'Balken', amount: 80}, {name: 'Schafe', amount: 56} ], sale: 1000},
//                {denare: 2860, items: [ {name: 'Balken', amount: 240}, {name: 'Schafe', amount: 168} ], sale: 2131},
//            ]
//        },
        {name: 'Latifundie', category: 2, production: ['Flachs', 'Getreide'], upgrade: []},
        {name: 'Lehmgrube', category: 2, production: ['Tonerde', 'Ziegel'], upgrade: []},
        {name: 'Goldmine', category: 2, production: ['Gold'], upgrade: []},
        {name: 'Eisenmine', category: 2, production: ['Eisen'], upgrade: []},
        {name: 'Bleimine', category: 2, production: ['Blei'], upgrade: []},
        {name: 'Köhlerei', category: 2, production: ['Kohle'], upgrade: []},
        {name: 'Forstwirtschaft', category: 2, production: ['Holz'], upgrade: []}
    ];

    estateLots = [
        {name: 'Residenz', category: 3, production: ['Kohle'], upgrade: []},
        {name: 'Marktplatz', category: 3, production: ['Kohle'], upgrade: []},
        {name: 'Lager', category: 3, production: ['Kohle'], upgrade: []},
        {name: 'Anlegestelle', category: 3, production: ['Kohle'], upgrade: []},
        {name: 'Versammlungsplatz', category: 3, production: ['Kohle'], upgrade: []}
    ];

    itemList = [
        {item: 'Blei', category: 2},
        {item: 'Eisen', category: 2},
        {item: 'Gold', category: 2, extras: ['Kohle']},
        {item: 'Holz', category: 2},
        {item: 'Kohle', category: 2},
        {item: 'Kräuter', category: 2},
        {item: 'Leder', category: 2, extras: ['Rinder', 'Salz']},
        {item: 'Rohglas', category: 2},
        {item: 'Tonerde', category: 2},
        {item: 'Balken', category: 0, extras: ['Holz']},
        {item: 'Bleirohre', category: 0, extras: ['Blei']},
        {item: 'Elfenbein', category: 0},
        {item: 'Fensterglas', category: 0, extras: ['Rohglas', 'Blei']},
        {item: 'Marmor', category: 0, extras: ['Werkzeug']},
        {item: 'Naturstein', category: 0},
        {item: 'Statuen', category: 0, extras: ['Werkzeug', 'Naturstein']},
        {item: 'Ziegel', category: 0, extras: ['Kohle']},
        {item: 'Fischsauce', category: 6, extras: ['Amphoren', 'Salz']},
        {item: 'Getreide', category: 6, extras: ['Pflug']},
        {item: 'Gewürze', category: 6},
        {item: 'Oliven', category: 6},
        {item: 'Olivenöl', category: 6, extras: ['Amphoren', 'Oliven']},
        {item: 'Salz', category: 6},
        {item: 'Trauben', category: 6},
        {item: 'Wein', category: 6, extras: ['Amphoren', 'Trauben']},
        {item: 'Esel', category: 4},
        {item: 'Geflügel', category: 4},
        {item: 'Pferde', category: 4, extras: ['Getreide']},
        {item: 'Rinder', category: 4},
        {item: 'Schafe', category: 4},
        {item: 'Ziegen', category: 4},
        {item: 'Wilde Tiere', category: 4},
        {item: 'Amphoren', category: 7, extras: ['Tonerde']},
        {item: 'Geschirr', category: 7, extras: ['Tonerde', 'Kohle']},
        {item: 'Heilsalbe', category: 7, extras: ['Kräuter', 'Olivenöl']},
        {item: 'Möbel', category: 7, extras: ['Balken', 'Werkzeug']},
        {item: 'Öllampen', category: 7, extras: ['Rohglas', 'Tonerde']},
        {item: 'Pergament', category: 7, extras: ['Kräuter', 'Ziegen']},
        {item: 'Schuhe', category: 7, extras: ['Leder']},
        {item: 'Schriftrollen', category: 7},
        {item: 'Flachs', category: 5},
        {item: 'Leinen', category: 5, extras: ['Flachs', 'Webstuhl']},
        {item: 'Mantel', category: 5, extras: ['Farben', 'Tuch']},
        {item: 'Seide', category: 5},
        {item: 'Toga', category: 5, extras: ['Farben', 'Seide']},
        {item: 'Tuch', category: 5, extras: ['Wolle', 'Webstuhl']},
        {item: 'Tunika', category: 5, extras: ['Leinen']},
        {item: 'Wolle', category: 5},
        {item: 'Karren', category: 3, extras: ['Holz', 'Leder']},
        {item: 'Pflug', category: 3, extras: ['Balken', 'Eisen']},
        {item: 'Rüstungen', category: 3, extras: ['Leinen', 'Tuch', 'Leder']},
        {item: 'Segel', category: 3, extras: ['Leinen', 'Tuch']},
        {item: 'Waffen', category: 3, extras: ['Kohle', 'Eisen']},
        {item: 'Webstuhl', category: 3, extras: ['Werkzeug', 'Holz']},
        {item: 'Werkzeug', category: 3, extras: ['Eisen']},
        {item: 'Edelsteine', category: 1},
        {item: 'Farben', category: 1, extras: ['Amphoren', 'Kräuter']},
        {item: 'Glaswaren', category: 1, extras: ['Rohglas', 'Kohle']},
        {item: 'Lehrschrift', category: 1, extras: ['Pergament', 'Geflügel']},
        {item: 'Literatur', category: 1, extras: ['Schriftrollen', 'Öllampen']},
        {item: 'Parfüm', category: 1},
        {item: 'Prunkgefäße', category: 1, extras: ['Gold', 'Glaswaren']},
        {item: 'Räucherwerk', category: 1},
        {item: 'Schmuck', category: 1, extras: ['Gold', 'Edelsteine'], working: []}
    ];

    shortList = ['Blei', 'Eisen', 'Gold', 'Holz', 'Kohle', 'Kräuter', 'Leder', 'Rohglas', 'Tonerde', 'Balken', 'Bleirohre', 'Elfenbein', 'Fensterglas', 'Marmor', 'Naturstein', 'Statuen', 'Ziegel', 'Fischsauce', 'Getreide', 'Gewürze', 'Oliven', 'Olivenöl', 'Salz', 'Trauben', 'Wein', 'Esel', 'Geflügel', 'Pferde', 'Rinder', 'Schafe', 'Ziegen', 'Wilde Tiere', 'Amphoren', 'Geschirr', 'Heilsalbe', 'Möbel', 'Öllampen', 'Pergament', 'Schuhe', 'Schriftrollen', 'Flachs', 'Leinen', 'Mantel', 'Seide', 'Toga', 'Tuch', 'Tunika', 'Wolle', 'Karren', 'Pflug', 'Rüstungen', 'Segel', 'Waffen', 'Webstuhl', 'Werkzeug', 'Edelsteine', 'Farben', 'Glaswaren', 'Lehrschrift', 'Literatur', 'Parfüm', 'Prunkgefäße', 'Räucherwerk', 'Schmuck', 'Denare'];

    workingMedium = [
        {category: 1, builing: 'Börse', items: ['Prunkgefäße', 'Räucherwerke+', 'Parfüm+'], amount: [22, 22, 4], percent: [30, 23, 15], sign: '+', property: 'Verkaufsgeschwindigkeit am Markt'},
        {category: 1, builing: 'Akademie', items: ['Leinen', 'Literatur+', 'Öllampen+'], amount: [15, 10, 45], percent: [35, 105, 70], sign: '+', property: 'Bildungspunkte pro Tag'},
        {category: 1, builing: 'Kornkammer', items: ['Karren+', 'Ölivenöl', 'Schafe+'], amount: [4, 6, 18], percent: [44, 15, 30], sign: '-', property: 'Tage bis Handlanger kommt'},
        {category: 1, builing: 'Hafen', items: ['Amphoren', 'Mantel+', 'Waffen+'], amount: [34, 2, 4], percent: [8, 15, 11], sign: '-', property: 'Transportzeit zur See'},
        {category: 1, builing: 'Forum', items: ['Edelsteine+', 'Gold', 'Gewürze+'], amount: [10, 34, 28], percent: [23, 8, 15], sign: '+', property: 'Produktion in Stadtbetrieben'},
        {category: 1, builing: 'Senat', items: ['Schmuck+', 'Parfüm+', 'Toga'], amount: [18, 16, 8], percent: [9, 6, 3], sign: '-', property: 'benötigtes Ansehen für Bauplätze'},
        {category: 1, builing: 'Kolosseum', items: ['Pferde+', 'Wilde Tiere', 'Wein+'], amount: [85, 5, 48], percent: [175, 87.5, 262.5], sign: '+', property: 'Ansehen'},
        {category: 1, builing: 'Aquädukt', items: ['Rinder+', 'Flachs', 'Bleirohre+'], amount: [66, 98, 58], percent: [15, 8, 23], sign: '+', property: 'Produktion in Landbetrieben'},
        {category: 1, builing: 'Kaserne', items: ['Rüstungen+', 'Heilsalbe+', 'Waffen'], amount: [28, 34, 62], percent: [4, 6, 2], sign: '+', property: 'Gute Gaben'},
        {category: 1, builing: 'Tempel', items: ['Ziegen+', 'Parfüm', 'Geflügel+'], amount: [10, 4, 10], percent: [3, 9, 6], sign: '+', property: 'Stadtansehen'},

        {category: 2, builing: 'Schafzucht', items: ['Ziegen+', 'Salz', 'Schafe+'], amount: [54, 32, 28], percent: [50, 20, 30], sign: '+', property: 'Produktion'},
        {category: 2, builing: 'Lehmgrube', items: ['Esel', 'Leder+', 'Schuhe+'], amount: [45, 20, 30], percent: [20, 30, 50], sign: '+', property: 'Produktion'},
        {category: 2, builing: 'Eisenmine', items: ['Balekn', 'Bleirohre+', 'Werkzeug+'], amount: [70, 18, 12], percent: [20, 30, 50], sign: '+', property: 'Produktion'},
        {category: 2, builing: 'Köhlerei', items: ['Karren+', 'Holz', 'Schuhe+'], amount: [3, 230, 30], percent: [30, 20, 50], sign: '+', property: 'Produktion'},

        {category: 3, builing: 'Schmied', items: ['Lehrschrift', 'Eisen+', 'Werkzeug+'], amount: [8, 26, 30], percent: [20, 30, 50], sign: '+', property: 'Produktion'},
        {category: 3, builing: 'Schreinerei', items: ['Öllampen+', 'Olivenöl', 'Werkzeug+'], amount: [48, 16, 18], percent: [50, 20, 30], sign: '+', property: 'Produktion'},
        {category: 3, builing: 'Töpferei', items: ['Kohle+', 'Möbel+', 'Leinen'], amount: [132, 21, 15], percent: [30, 50, 20], sign: '+', property: 'Produktion'}
    ];

    // public funcs

    this.getCityLots = function() {
        return cityLots;
    };
    this.getCountryLots = function() {
        return countryLots;
    };
    this.getEstateLotsLots = function() {
        return estateLots;
    };
    this.getItemList = function() {
        itemList.push({item: 'Denare', category: 9});
        return itemList;
    };
    this.getWorkingMedium = function(category) {
        var cat = category || 0,
            arr = [];

        if (cat == 0) {
            return workingMedium;
        }
        for (var i = 0; i < workingMedium.length; i++) {
            if (workingMedium[i].category == cat) {
                arr.push(workingMedium[i]);
            }
        }
        return arr;
    };
    this.getShortList = function() {
        return shortList;
    };
    this.consoleLog = function(test) {
        console.log(test);
    };
}
var remanum = new DataRemanum();


function getBuilding(category) {

    var cat = category || 'production';
    var list = [];

    switch (cat) {
        case 'city':
            list = remanum.getCityLots();
            break;
        case 'country':
            list = remanum.getCountryLots();
            break;
        case 'estate':
            list = remanum.getEstateLots();
            break;
        case 'all':
            list = list.concat(remanum.getCityLots(), remanum.getCountryLots(), remanum.getEstateLots());
            break;
        case 'production':
            list = list.concat(remanum.getCityLots(), remanum.getCountryLots());
            break;
        default:
            list = list.concat(remanum.getCityLots(), remanum.getCountryLots());
            break;
    }

    return list;
}


function getBuildingsByItem(item) {

    var building = getBuilding(),
        list = [];

    for (var i = 0; i < building.length; i++) {
        if (building[i].upgrade.length > 0) {
            for (var j = 0; j < building[i].upgrade.length; j++) {
                if (building[i].upgrade[j].items.length > 0) {
                    for (var k = 0; k < building[i].upgrade[j].items.length; k++) {
                        if (building[i].upgrade[j].items[k].name == item) {
                            if (list.indexOf(building[i].name)) {
                                list.push(building[i].name);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(list);
    return list;
}


function getBuildingCategory(id) {

    return ['Stadtbetrieb', 'Landbetrieb'];
}


function getItem() {

    var items = remanum.getItemList(),
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

    var items = remanum.getItemList(),
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
        cat = remanum.getItemList(),
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
        obj = remanum.getItemList()[id],
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
            'background-position': getItemImage(array[i])
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
                    top: (coordY - reduce) + 'px',
                    left: (coordX + 60) + 'px'
                });
            });
        }
        else {
            tooltip.css({
                top: (element.offset().top - 10) + 'px',
                left: '700px'
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
        type: 'POST',
        async: false,
        url: 'app/core/home/json.remanum.php',
        cache: false,
        data: obj,
        dataType: 'json',
        success: function(data) {
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
                    'backgroundPosition': getItemImage(tmp)
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
        error: function() {
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
                    sortvalue: text.replace('m', ''),
                    datarowid: div.attr('id')
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
            opacity: 0.6,
            items: 'div',
            update: function() {
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
                type: 'POST',
                async: false,
                url: 'app/core/home/json.remanum.php',
                cache: false,
                data: obj,
                dataType: 'json',
                success: function() {
                    obj = {};
                    getData(obj, trade_article, tooltip);
                },
                error: function() {
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

        // buildinglist
        // =======================================================

        var build_section = $('#remanum .productlist'),
            build_copydiv = build_section.find('header div'),
            build_article = build_section.find('article');
    }
})();