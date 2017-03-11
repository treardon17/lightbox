<!DOCTYPE html>
<html>
  <head>
    <title>Lightbox</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script type="text/javascript" src="./resources/js/require.js"></script>
    <script type="text/javascript">requirejs(["./resources/js/parallax.js"], function(){ })</script>
    <script type="text/javascript">requirejs(["./resources/js/main.js"], function(){ })</script>
    <link href="./resources/css/styles.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div class="content">
            <script type="text/javascript">requirejs(["./resources/js/image-modal"], function(){ })</script>
      <div id="image-modal"><a class="image-modal-exit" href="#">
          <div class="exit-image"></div></a>
        <div id="image-modal-main-image"></div>
        <div class="image-modal-thumbnails"></div>
      </div>
            <script type="text/javascript">requirejs(["./resources/js/image-section"], function(){ })</script>
      <div class="image-section"><?php include './resources/php/image-section.php'; ?></div>
    </div>
  </body>
</html>