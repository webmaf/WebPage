<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Maf
 * Date: 10.03.12
 * Time: 13:28
 * To change this template use File | Settings | File Templates.
 */
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">
<head>
<title><?php echo $page_title; ?></title>
<meta name="description" content="<?php echo $page_description; ?>" />
<meta name="keywords" content="<?php echo $page_keywords; ?>" />
<?php include 'template/include/header.html'; ?>
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