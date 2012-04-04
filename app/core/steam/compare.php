<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$steamList = file('template/steam/gamelist.txt');

sort($steamList);
$steamList = array_unique($steamList);
$availableGames = '';

foreach ($steamList as $key => $value) {
    $availableGames .= "'" . ucfirst(trim(htmlspecialchars($value))) . "', ";
}
$availableGames = substr($availableGames, 0, -2);

include 'data.php';

/**
 * Sammel alle User die verglichen werden sollen
 * 1. auslesen aus der URL
 * 2. auslesen aus dem Formular
 * 3. alle User in ucfirst
 * 4. aplhabethisch sortieren
 */
$user = array();
if (!isset($_POST['game']) && isset($_GET['user'])) {
    $user = explode(',', $_GET['user']);
}
foreach ($_REQUEST as $key => $value) {
    if ($value == 'on' && !in_array(strtolower($key), $user)) {
        $user[] = $key;
    }
}
foreach ($user as $key => $value) {
    $user[$key] = ucfirst($value);
}
sort($user);

//&dl=1&user=maf,asmo,sarx,melth&game=CivV
//game = TheElderScrollsVSkyrim

$compareGame = (isset($_REQUEST['game'])) ? $_REQUEST['game'] : '';

if ($_SERVER['REQUEST_METHOD'] && !empty($compareGame) && count($user) > 0) {

    $erfolgsliste = array();
    $variable = array();
    //$variable = array( 'stats1.xml', 'stats2.xml', 'stats3.xml', 'stats4.xml', 'stats4.xml');
    $max4 = 1;
    foreach ($user as $key => $value) {
        if ($max4 < 5) {
            $max4++;
            $value = ucfirst($value);
            $variable[] = array('link' => $friends[$value]['idlink'], 'name' => $value);
        }
    }
    if ($_REQUEST['game'] == '' || $_REQUEST['game'] == null || strlen($_REQUEST['game']) < 4) {
        $erfolgsliste = null;
        $daten = null;
    } else {
        // auslesen
        foreach ($variable as $key => $value) {
            $steamURL = 'http://steamcommunity.com/' . $value['link'];
            $xml = simplexml_load_file($steamURL . 'stats/' . $_REQUEST['game'] . '/?xml=1&l=german&tab=achievements');
            //$xml = simplexml_load_file($value);

            $sammel = array();
            $count = 0;
            if ($xml->error) {
                $sammel[] = array('name' => false, 'bild' => 'nix', 'text' => false);
            } else {
                foreach ($xml->achievements->achievement as $erfolg) {
                    if ($erfolg['closed'] == 1) {
                        $count++;
                        $bild = '' . $erfolg->iconClosed;
                    } else {
                        $bild = '' . $erfolg->iconOpen;
                    }
                    $sammel[] = array('name' => '' . $erfolg->name, 'bild' => $bild, 'text' => $erfolg->description);
                }
                // sortiere die Arraygruppe nach Erfolgsname: ASC
                $tmp = array();
                foreach ($sammel as &$ma) {
                    $tmp[] = &$ma["name"];
                }
                array_multisort($tmp, $sammel);
            }
            $erfolgsliste[] = $sammel;
            $daten[$key] = array('_friend' => $value['name'], '_erfolg' => $count);
        }
        
        $vergleiche = count($erfolgsliste);
    }
}
?>
