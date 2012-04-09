<?php
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


function getURL($url = false)
{
    if (!$url) {
        $url = $_SERVER['REQUEST_URI'];
    }
    $urlDaten = explode("/", $url);
    $urlSplit = array();
    foreach ($urlDaten AS $daten) {
        if ('' != $daten && !preg_match("/PHPSESSID/i", $daten)) {
            //echo $daten.'<br/>';
            $urlSplit[] = $daten;
        }
    }
    //print_r($urlSplit);
    return $urlSplit;
}

function checkFile($url)
{
    $check = (substr($url, 0, 1)) ? substr_replace($url, '', 0, 1) : $url;

    if (file_exists($check)) {
        return $url;
    }
    else {
        echo 'fehler in : ' . $url;
        return '/app/config/empty.php';
    }
}

include(checkFile('/app/config/config.php'));

$page = (isset($_REQUEST['p'])) ? $_REQUEST['p'] : '';

$page_content = '';
$page_title = 'webMaf - Webdeveloper';
$page_description = '';
$page_keywords = '';
$page_script = array(
    '<script type="text/javascript" src="js/plugins.js"></script>',
    '<script type="text/javascript" src="js/slider.js"></script>',
    '<script type="text/javascript" src="js/script.js"></script>',
    '<script type="text/javascript" src="js/remanum.js"></script>'
);

if (!empty($page)) {

    switch ($page) {
        case 'diablo' :
            $page_content = '/app/core/steam/games.php';
            $page_title = 'webMaf - steam';
            $page_script[] = '<script type="text/javascript" src="http://eu.battle.net/d3/static/js/tooltips.js"></script>';
            break;

        case 'steam-games' :
            $page_content = '/app/core/steam/games.php';
            $page_title = 'webMaf - steam';
            $page_script[] = '<script type="text/javascript" src="js/libs/jquery.tablesorter.min.js"></script>';
            $page_script[] = '<script type="text/javascript" src="js/steam.js"></script>';
            break;

        default:
            $page_content = '/app/core/home/home.php';
            $page_title = 'webMaf - Webdeveloper';
            break;
    }
}
else {
    $page_content = '/app/core/home/home.php';
    $page_title = 'webMaf - Webdeveloper';
}

//include(checkFile('/app/core/page.php'));

?>


<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="en"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"><![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en"><!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <title><?php echo $page_title; ?></title>
        <meta name="description" content="<?php echo $page_description; ?>" />
        <meta name="keywords" content="<?php echo $page_keywords; ?>" />
        <meta name="description" content="" />
        <!-- Mobile viewport optimized: h5bp.com/viewport -->
        <meta name="viewport" content="width=device-width" />
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->
        <link type="text/css" rel="stylesheet" href="css/style.css" />
        <!--<link type="text/css" rel="stylesheet" href="stylesheets/screen.css" media="screen, projection" />-->
        <!--<link type="text/css" rel="stylesheet" href="stylesheets/print.css" media="print" />-->
        <link type="text/css" rel="stylesheet" href="stylesheets/style.css" media="screen" />
        <!--[if IE]>
        <link type="text/css" rel="stylesheet" href="stylesheets/ie.css" media="screen, projection" /><![endif]-->
        <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->
        <!-- All JavaScript at the bottom, except this Modernizr build. Modernizr enables HTML5 elements & feature detects for optimal performance. Create your own custom Modernizr build: www.modernizr.com/download/ -->
        <script type="text/javascript" src="js/libs/modernizr-2.5.3.min.js"></script>
    </head>
    <body>
        <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6. chromium.org/developers/how-tos/chrome-frame-getting-started -->
        <!--[if lt IE 7]>
        <p class="chromeframe">
            Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or
            <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.
        </p>
        <![endif]-->
        <div class="page">
            <header>
            </header>
            <div role="main" class="content addShadow" data-shadow="side">
                <?php include(checkFile($page_content)); ?>
            </div>
            <section>
                <?php include(checkFile('/app/core/page/navigation.php')); ?>
            </section>
            <footer class="footer">
                <?php include(checkFile('/app/core/page/footer.php')); ?>
            </footer>
        </div>
        <!-- JavaScript at the bottom for fast page loading -->
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script type="text/javascript">window.jQuery || document.write('<script type="text/javascript" src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
        <?php
        foreach ($page_script as $value) {
            echo $value . "\n";
        }
        ?>
    </body>
</html>