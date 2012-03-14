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

/**
 * === INCLUDE
 * ------------------------------------------------
 * */
if (file_exists('app/core/config.php')) {
    include 'app/core/config.php';
}
//include 'php/function/function.php';
//include 'php/function/transaction.php';
//require_once 'php/url_manipulation.php';
//require_once 'php/class/Datenbank.class.php';


$page = (isset($_REQUEST['p'])) ? $_REQUEST['p'] : '';

$page_content = '';
$page_title = '';
$page_description = '';
$page_keywords = '';
$page_addscript = '';

if (!empty($page)) {
    switch ($page) {
        default:
            $page_addscript = '';
            $page_content = 'app/core/home.php';
            $page_title = 'webMaf - Webdeveloper';
            break;
    }
}
else {
    $page_addscript = '';
    $page_content = 'app/core/home.php';
    $page_title = 'webMaf - Webdeveloper';
}
include 'app/core/page.php';

?>
