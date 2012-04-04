<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"><![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang="en"><![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang="en"><![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en"><!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <title><?php echo $page_title; ?></title>
        <meta name="description" content="<?php echo $page_description; ?>" />
        <meta name="keywords" content="<?php echo $page_keywords; ?>" />
        <?php //include(checkFile('/app/design/header.html')); ?>

        <meta name="description" content="" />
        <!-- Mobile viewport optimized: h5bp.com/viewport -->
        <meta name="viewport" content="width=device-width" />
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->
        <link type="text/css" rel="stylesheet" href="css/style.css" />
        <!--<link type="text/css" rel="stylesheet" href="stylesheets/screen.css" media="screen, projection" />-->
        <!--<link type="text/css" rel="stylesheet" href="stylesheets/print.css" media="print" />-->
        <link type="text/css" rel="stylesheet" href="stylesheets/main.css" media="screen" />
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
        <script type="text/javascript">window.jQuery || document.write('<script src="/js/libs/jquery-1.7.1.min.js"><\/script>')</script>
        <?php
        foreach ($page_script as $value) {
            echo $value . "\n";
        }
        ?>
        <script src="http://eu.battle.net/d3/static/js/tooltips.js"></script>
    </body>
</html>