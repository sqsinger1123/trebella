<!DOCTYPE html> <!-- Hooray for HTML5! -->
<html>

<!-- Welcome to the source code for Trebella! 
*
* We hope that you enjoy seeing our handiwork.
* This version designed by Samuel Q Singer
* Available via sqsinger.com
*
**********************************************-->

  <head>
    <title>Trebella: A New Way to Learn Piano</title>
    
    <!-- Include latest jQuery and custom scripts that make this page possible -->
    <script src='http://code.jquery.com/jquery.min.js'></script>
    <script src='js/scripts.js'></script>

    <!-- Favicon links -->
    <link id='favicon_def' rel='shortcut icon' href='./favicon.ico' />
    <link id='favicon_def2' rel='icon' type='image/x-icon' href='./favicon.ico' />

    <!-- Stylesheet links: Bootstrap(+resp), GoogleFonts, & custom CSS (made with LESS, Sass, and/or PHP) -->
    <link rel="stylesheet" href="css/normalize.css" type="text/css" />
    <link rel="stylesheet" href="css/styles.css" type="text/css" />

    <!-- Metadata -->
    <meta name='about' content='Trebella: A New Way to Learn Piano' />
    <meta name='keywords' content='Trebella'/>
    <meta name='author' content='Blake Wilkey' />
    <meta http-equiv='content-type' content='text/html;charset=UTF-8' />

  </head>

  <body>
    <div id="top_logo">
      <a href="#top" title="Trebella">
        <img src="img/logo.png" alt="Trebella Logo" />
      </a>
    </div>
    <div id="top"> <!-- This empty div serves as an internal anchor link --></div>
    <?php include("pages/header.php"); ?>

    <div id="wrapper" class="container">
      <div id="main" class="row-fluid">
        <?php
              include("pages/home.php");
              include("pages/about.php");
              include("pages/contact.php");
        ?>
      </div>
    </div> <!-- end div wrapper -->
    <?php
      include("pages/footer.php");
      include("pages/credits.php"); 
    ?>
  </body>
</html>