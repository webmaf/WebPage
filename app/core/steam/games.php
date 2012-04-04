<?php

include(checkFile('/app/core/steam/data.php'));

$collection = array();
$userprofil = array();
$gamelist = array();
$gametable = array();
$increment = 0;

if (count($friends) > 0) {
    foreach ($friends as $key => $value) {
        if ($value['show'] == 1 && $value['games'] == 1) {
            $steamURL = 'http://steamcommunity.com/' . $value['idlink'];
            //$xml = simplexml_load_file($steamURL.'games/?xml=1&tab=all&l=german');
            $xml = simplexml_load_file('D:\Programm\xampplite\htdocs\webmaf\app\core\steam\xml/' . lcfirst($value['name']) . '.xml');

            if ($xml) {
                $user = array();
                $game = array();
                $hoursGame = 0;
                $hoursTotal = 0;
                $gameCount = 0;

                foreach ($xml->games->game as $key) {
                    $gameCount++;
                    $hoursGame = ($key->hoursOnRecord) ? $key->hoursOnRecord : 0;
                    $hoursTotal += $hoursGame;
                    //$user[] = array(''.$key->name, $hoursGame);

                    $collection[(string)$key->name][$increment] = (string)$hoursGame;
                }
                //$collection[] = $user;
                $userprofil[] = array($value['name'], $gameCount, $hoursTotal);
                $increment++;
            }
        }
    }
    //ksort($collection);

    $countcol = count($userprofil);

    foreach ($collection as $game => $value) {
        $hasgame = count($value);
        $summary = array_sum($value);
        $collection[$game][($countcol)] = $summary;
        $collection[$game][($countcol + 1)] = round(($summary / $hasgame), 1);
        $collection[$game][($countcol + 2)] = round(($summary / $countcol), 1);
    }
    $countcol += 3;
    //asort($collection);

    include(checkFile('/app/design/steam/games.phtml'));
}
?>