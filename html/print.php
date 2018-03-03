<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>goodminder</title>
		<link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
    <link href="print.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <script defer src="https://use.fontawesome.com/releases/v5.0.3/js/all.js"></script>
    <script src="scripts/jquery-3.3.1.min.js"></script>
    <script src="http://www.datejs.com/build/date.js" type="text/javascript"></script>
    <script src="scripts/GetCollectionItems.js"></script>

</head>

<body>

<main>
  <div id="yesData">

  </div>
  <div id="noData">

  </div>
  <div id="empty">


  </div>
  <div id="rating" class="options" style="text-align: right;"><span style="float: left;">
    <!-- Rating Stars Box -->
    <!-- Note that fas = solid and far = empty-->
    <button class='star-button' onclick="stars('fa1')"><i id="fa1" class="far fa-star"></i></button>
    <button class='star-button' onclick="stars('fa2')"><i id="fa2" class="far fa-star"></i></button>
    <button class='star-button' onclick="stars('fa3')"><i id="fa3" class="far fa-star"></i></button>
    <button class='star-button' onclick="stars('fa4')"><i id="fa4" class="far fa-star"></i></button>
    <button class='star-button' onclick="stars('fa5')"><i id="fa5" class="far fa-star"></i></button>

  </span>

  </div>
  <!--BEGIN TEMPLATE PROMPT-->
  <div id="prompt" style="display:none">
    <p class="comfortaa" style="text-align: right;">Added <a href="#">Month Day, Year</a> from <a href="#">Prompt Collection Media</a></p>

     <div class="media prompt">
     <i class="fas fa-question-circle" style="font-size: 64px; margin-right: 20px;"></i>

     <div class="media-body">


     <p class="lato" style="text-align: center; margin-right: 100px;">What is a song that made you smile in the past month?</p>
    </div>
    </div>
    <br>

    <div class="media answer" style="position: relative;">
    <i class="fas fa-quote-left" style="font-size: 64px; margin-right: 20px;"></i>
    <div class="media-body">

    <br>
    <h4 class="lato" style="text-align: center; margin-right: 100px;">Legend of Kyrandia Emerald Room Song by Frank Klepacki</h4><br>

      </div>

    <i class="fas fa-quote-right" style="font-size: 64px; margin-left: 20px; position: absolute; bottom: 10px; right: 10px;"></i>
    </div>
<br>

    <div class="media reason">
    <i class="fas fa-lightbulb" style="font-size: 64px; margin-left: 15px; margin-right: 20px;"></i>

    <div class="media-body lato" style="margin-right: 100px;">

  After wandering through endless caves in the game with repetitive music, the music changes for only one scene to a complex, long, cool song. It reminds me of all that is great about old school adventure games.
    </div>
      </div>
  </div>
  <!--END TEMPLATE PROMPT-->

  <!--BEGIN TEMPLATE QUOTE-->
  <div id="quote" style="display:none">
  <p style="text-align: right;" id="quote-add-date-collection">Quote added <a href="#">Month Day, Year</a> to <a href="#">
    Quote Collection: Inspirational</a></p>
  <div class="media answer" style="position: relative;">
  <i class="fas fa-quote-left" style="font-size: 64px; margin-right: 20px;"></i>
  <div class="media-body">

  <br>

  <h4 class="lato" style="text-align: left; margin-right: 100px;" id="quote-random_0">
    May your beer be laid under an enchantment of surpassing excellence for seven years!</h4><p class="lato" style="text-align: right; margin-right: 100px;" id="quote-who-source-author">-- Gandalf, from <i>The Fellowship of the Ring</i> by J.R.R. Tolkien</p>
    <br>
  </div>

  <i class="fas fa-quote-right" style="font-size: 64px; margin-left: 20px; position: absolute; bottom: 10px; right: 10px;"></i>
  </div>
  <br>

  <div class="media reason">
  <i class="fas fa-lightbulb" style="font-size: 64px; margin-left: 15px; margin-right: 20px;"></i>

  <div class="media-body lato" style="margin-right: 100px;" id="quote-reason">
Will and I were reading Tolkien out loud and this was the best line in the entire book.
  </div>
    </div>

  </div>
  <!--END TEMPLATE QUOTE-->

  <!--BEGIN TEMPLATE CUSTOM-->
  <div id="custom" style="display:none">
  <p style="text-align: right;" id="quote-add-date-collection">Custom entry added <a href="#">Month Day, Year</a> to <a href="#">
    Custom Collection: Affirmations</a></p>
  <div class="media answer" style="position: relative;">
  <i class="fas fa-quote-left" style="font-size: 64px; margin-right: 20px;"></i>
  <div class="media-body">

  <br>

  <h4 class="lato" style="text-align: left; margin-right: 100px;" id="quote-random_0">
    Breathe! Drink water. Smile at your thoughts.</h4>
    <br>
  </div>

  <i class="fas fa-quote-right" style="font-size: 64px; margin-left: 20px; position: absolute; bottom: 10px; right: 10px;"></i>
  </div>
  <br>

  </div>
  <!--END TEMPLATE CUSTOM-->
  <br />




</div>

<!--END IF USER HAS GOODMINDER ENTRIES IN DATABASE-->

</main>

<footer>
<div class="row comfortaa">
  <div class="col" style="text-align: left; padding-right:0px;">
  <p>Made with care<a href="#" class="button-clear"> </a></p>
  </div>
  <div class="col" style="text-align: center; padding:0px;">
  <p>Printed with <img src="favicon.png" alt=" " style="height:1em"/><a href="index.php" class="button-clear">goodminder</a></p>
  </div>
  <div class="col" style="text-align: right; padding-left:0px;">
  <div id="date"></div>
  </div>


</div>
</footer>
</div>
<!--scripts below here-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
<script src="scripts/stars.js"></script>
<script src="scripts/changeTemplate.js"></script>
<script>
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
</script>
</body>
</html>
