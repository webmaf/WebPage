<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Maf
 * Date: 30.03.12
 * Time: 13:58
 * To change this template use File | Settings | File Templates.
 */

ob_start();
header('content-type: application/json');

$file = 'text.renanum.txt';
$json = '';


if (isset($_POST['action'])) {

    switch ($_POST['action']) {

        case 'read' :

            $fp = fopen($file, "r");
            $ln = 0;
            while ($line = fgets($fp)) {
                ++$ln;
                //printf("%2d: ", $ln);
                if ($line === FALSE) {
                    $json .= '=';
                }
                else {
                    $json[] = str_replace("\n","",explode(',', $line));
                }
            }
            fclose($fp);
            break;

        case 'write' :

            if (file_exists($file)) {
                $fp = fopen($file, 'w');
                foreach ($_POST['items'] as $key => $name) {
                    $str = implode(',', $name);
                    fwrite($fp, $str . "\n");
                }
                fclose($fp);
                $json = 'write=1';
            }
            break;

        default:

            $json = 'default=1';
            break;


    }

}

// use only once json_encode in this document
echo json_encode($json);
//echo $json;

?>
