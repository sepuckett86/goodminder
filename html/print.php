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

</head>

<body>


     <p class="comfortaa" style="text-align: right;"><span style="float: left;"><a href="#" class="button-clear">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>

          &nbspRating</a></span>
      Quote added <a href="#">Month Day, Year</a> to <a href="#">Quote Collection: Inspirational</a></p>



      <div class="media answer" style="position: relative;">
      <i class="fas fa-quote-left" style="font-size: 64px; margin-right: 20px;"></i>
      <div class="media-body">

      <br>
      <h4 class="lato" style="text-align: left; margin-right: 100px;">May your beer be laid under an enchantment of surpassing excellence for seven years!</h4><p class="lato" style="text-align: right; margin-right: 100px;">-- Gandalf, from <i>The Fellowship of the Ring</i> by J.R.R. Tolkien</p><br>

        </div>

      <i class="fas fa-quote-right" style="font-size: 64px; margin-left: 20px; position: absolute; bottom: 10px; right: 10px;"></i>


      </div>
  <br>

      <div class="media reason">
      <i class="fas fa-lightbulb" style="font-size: 64px; margin-left: 15px; margin-right: 20px;"></i>

      <div class="media-body lato" style="margin-right: 100px;">

    Will and I were reading Tolkien out loud and this was the best line in the entire book.
      </div>
        </div>
      <br>



    </div>
    <br>



<footer>
<div class="row comfortaa">
  <div class="col" style="text-align: left; padding-right:0px;">
  <p>Made with care<a href="#" class="button-clear"> </a></p>
  </div>
  <div class="col" style="text-align: center; padding:0px;">
  <p>Printed with <img src="logoDark.png" alt=" " style="height:1em"/><a href="index.php" class="button-clear">goodminder</a></p>
  </div>
  <div class="col" style="text-align: right; padding-left:0px;">
  <div id="date"></div>
  </div>


</div>
</footer>
</div>

<script>
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
</script>
</body>
</html>
