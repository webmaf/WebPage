<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Maf
 * Date: 30.03.12
 * Time: 19:26
 * To change this template use File | Settings | File Templates.
 */

$file = 'text.renanum.txt';
$json = '';


$fp = fopen($file, "r");
$ln = 0;
while ($line = fgets($fp)) {
    ++$ln;
    printf("%2d: ", $ln);
    if ($line === FALSE) {
        $json .= ("FALSE\n");
    }
    else {
        $json .= ($line);
    }
}
fclose($fp);

echo $json;

?>
