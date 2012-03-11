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
    <!-- Use the .htaccess and remove these lines to avoid edge case issues. More info: h5bp.com/i/378 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title><?php echo $page_title; ?></title>
    <meta name="description" content="<?php echo $page_description; ?>" />
    <meta name="keywords" content="<?php echo $page_keywords; ?>" />
    <?php include 'app/design/header.html'; ?>
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
    <div role="main" class="content addShadow" data-shadow="side">
        <?php include $page_content; ?>
    </div>
    <?php include 'page/navigation.php'; ?>
    <?php include 'page/footer.php'; ?>
</div>

<!-- JavaScript at the bottom for fast page loading -->
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript">window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>
<script type="text/javascript" src="js/plugins.js"></script>
<script type="text/javascript" src="js/slider.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript">
    $(window).load(function() {
        if ($('html').not('.lt-ie8').length > 0) {
            var container = $('.slider').find('.slider-screen ul'),
                slider = new Slider(container, $('.slider-nav'), 960),
                button = slider.nav.find('button').on('click', function() {
                    slider.setCurrent($(this).data('dir'));
                    slider.transition();
                });
            console.log(true);
        }
    });
</script>
<?php echo $page_addscript; ?>
</body>
</html>