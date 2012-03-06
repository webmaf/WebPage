<?php


include 'index.html';
exit();

/**
 * === SESSION
 * ------------------------------------------------
 * */
/*
  ob_start();
  session_start();
  //session_destroy();

  if (!$_SESSION['srun']) {
  $_SESSION['srun']     = true;
  $_SESSION['sname']    = session_name();
  //$_SESSION['sname']    = 'sessionId';
  $_SESSION['stime']    = 14400; //4 stunden
  $_SESSION['sid']      = session_id();
  $_SESSION['ulogin']   = false;
  $_SESSION['ustatus']  = 2;
  }
  else {
  } */

/**
 * === INCLUDE
 * ------------------------------------------------
 * */
include 'php/config.php';
//include 'php/function/function.php';
//include 'php/function/transaction.php';
//require_once 'php/url_manipulation.php';
//require_once 'php/class/Datenbank.class.php';


$page = (isset($_REQUEST['p'])) ? $_REQUEST['p'] : '';

$page_content = '';
$page_title = '';
$page_description = '';
$page_keywords = '';
$page_addhead = '';

if (!empty($page)) {
    switch ($page) {
        case 'specials':
            $page_content = 'template/page/sub-specials.phtml';
            break;

        case 'steam-compare':
            $page_content = 'template/page/steam-compare.phtml';
            $page_title = 'webMaf.de - Steam :: Achievments';

            include 'php/include/steam-compare.php';
            break;

        case 'steam-games':
            $page_content = 'template/page/steam-games.phtml';
            $page_title = 'webMaf.de - Steam :: Spieleliste';

            include 'php/include/steam-games.php';
            break;

        default:
            $page_content = 'template/page/start.phtml';
            break;
    }
} else {
    $page_content = 'template/page/start.phtml';
    $page_title = 'webMaf.de - Webdeveloper';
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">
<head>
    <title><?php echo $page_title; ?></title>
    <meta name="description" content="<?php echo $page_description; ?>" />
    <meta name="keywords" content="<?php echo $page_keywords; ?>" />
    <?php include 'template/include/header.phtml'; ?>
    <?php echo $page_addhead; ?>
</head>
<body>
<div id="pagewrapper">
    <div class="rahmen">
        <div id="topline">
            <?php include 'template/include/topline.phtml'; ?>
        </div>
        <div id="headline"></div>
        <div id="naviline">
            <?php include 'template/include/navigation.phtml'; ?>
        </div>
        <div id="mainline">
            <?php include($page_content); ?>
        </div>
        <div id="footline">
            <?php include 'template/include/footer.phtml'; ?>
        </div>
    </div>
</div>
</body>
</html>

<?php
/**
 * === DEBUG MODE
 * ------------------------------------------------
 * */
if (DEBUG) {
    /* echo '<pre><i>$_SERVER:</i> ';
      var_dump($_SERVER);
      echo '</pre><br />'; */

    echo '<pre><i>$result:</i> ';
    var_dump($result);
    echo '</pre><br />';

    echo '<pre><i>$_POST:</i> ';
    var_dump($_POST);
    echo '</pre><br />';

    echo '<pre><i>$_REQUEST:</i> ';
    var_dump($_REQUEST);
    echo '</pre><br />';

    echo '<pre><i>$_COOKIE:</i> ';
    var_dump($_COOKIE);
    echo '</pre><br />';

    echo '<pre><i>$_SESSION:</i> ';
    var_dump($_SESSION);
    echo '</pre><br />';
}
?>