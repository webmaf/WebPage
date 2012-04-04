<?php
/*==================================================================
.			  Ein beliebiges Zeichen.
\.			Ein Punkt.
.+			Ein oder mehrere beliebige Zeichen.
\.\+		Ein Punkt und ein Pluszeichen.
.*			Kein oder mehr beliebige Zeichen.
.?			Kein oder ein beliebiges Zeichen.
^a			"a" am Anfang einer URL oder eines Dateinamens.
a$			"a" am Ende einer URL oder eines Dateinamens.
a			b
(.*)		(Gruppe) die in ".*" gefundene Zeichenkette wird in der Variable "$1" gespeichert 
        wenn es sich um eine RewriteRule handelt. Wenn es sich um eine RewriteCond handelt 
        wird die Zeichenkette in "%1" gespeichert. Es duerfen mehrere Gruppen in einem Ausdruck 
        verwendet werden. Dementsprechend werden die Inhalte in "$2", "$3", .... "$99" abgelegt.
(a			b)
[-0-9a-z]*	Beliebig viele Bindestriche, Zahlen oder Kleinbuchstaben.
[^/]*		Beliebig viele Zeichen, jedoch kein Slash.
!regexp		=true wenn der Ausdruck nicht gefunden wird.
<2000		Vergleichsausdruck ist kleiner als 2000.
>1000		Vergleichsausdruck ist gr�sser als 1000.
=""			Vergleichsausdruck ist ein leerer String.
-d			Vergleichsausdruck zeigt auf ein Verzeichniss.
-f			Vergleichsausdruck zeigt auf eine Datei.
-l			Vergleichsausdruck zeigt auf einen Link.
-s			Vergleichsausdruck zeigt auf eine nicht leere Datei.
-U			Vergleichsausdruck zeigt auf eine gueltige URL, welche der Client lesen darf.
-F			Vergleichsausdruck zeigt auf eine Datei, welche der Client lesen darf.. 

Quelle:		http://www.modrewrite.de/mod-rewrite/

==================================================================*/

//-------------------------------------------------------------------------------------
/**
 * Komplette URL wird in $url gespeichert
 * Die URL wird mit dem Seperators / in seine Einzelteile zerlegt
 * Jeden Teil der URL in das Array als neues Element schreiben
 *
 * @return array $urlsplit
 */
function getURL()
{
    $url = $_SERVER['REQUEST_URI'];
    $urlDaten = explode("/", $url);
    $urlSplit = array();
    foreach ($urlDaten AS $daten) {
        if ('' != $daten && !preg_match("/PHPSESSID/i", $daten)) {
            //echo $daten.'<br/>';
            $urlSplit[] = $daten;
        }
    }
    return $urlSplit;
}

/**
 * @param string $url
 */
function includeFile($url)
{
    if (file_exists($url)) {
        include $url;
    }
}

?>
