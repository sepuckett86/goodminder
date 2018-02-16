/*id="quote-add-date-collection">Quote added <a href="#">Month Day, Year</a> to <a href="#">
Quote Collection: Inspirational</a></p>

<h4 class="lato" style="text-align: left; margin-right: 100px;" id="quote-random">
May your beer be laid under an enchantment of surpassing excellence for seven years!</h4><p class="lato" style="text-align: right; margin-right: 100px;" id="quote-who-source-author">-- Gandalf, from <i>The Fellowship of the Ring</i> by J.R.R. Tolkien</p>

<div class="media-body lato" style="margin-right: 100px;" id="quote-reason">
    Will and I were reading Tolkien out loud and this was the best line in the entire book.
      </div>
*/

$(document).ready(function () {
    $('#btn-next').on('click', function(event){
        event.preventDefault();

        $.ajax({
            method: "POST",
            url: "scripts/DbCollectionItemsUpload.php",
            data: postData
          })
            .done(function( msg ) {
              // alert( "Data Saved: " + msg );
            });
    });
});

