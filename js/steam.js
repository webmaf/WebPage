/**
 * Created with JetBrains PhpStorm.
 * User: Maf
 * Date: 18.03.12
 * Time: 11:42
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {

    if ($('#tab-gamelist').length > 0) {
        $('#tab-gamelist').tablesorter();
        $('#tab-gamelist tr:last-child').css('border-right', '0 none');
        $('#tab-gamelist td:last-child').css('border-right', '0 none');
        //$('#tab-gamelist .row1').not('.hasnotgame').length;
        $('#tab-gamelist th.tip').mouseover(
            function() {
                var id = $(this).attr('id');
                $('#tab-gamelist tr.info .' + id).show();
            }).mouseout(function() {
                $('#tab-gamelist tr.info div').hide();
            });
    }

});