/*
<div class="media-body lato" style="margin-right: 100px;" id="quote-reason">
    Will and I were reading Tolkien out loud and this was the best line in the entire book.
      </div>
*/

$(document).ready(function () {
    idProp = $('[id*="quote-random"]').prop('id');
    collectionId = idProp.substr(13);

    $.ajax({
        method: "POST",
        url: "scripts/GetDbCollectionItems.php",
        data: {"collectionId":collectionId}
      })
        .done(function( msg ) {
            msg = JSON.parse(msg);
            var newId = 'quote-random_' + msg.collectionId;
            var addedDate = new Date(msg.recordedDate);
            var formattedDate = addedDate.toString("MMMM dd, yyyy");
            var rating;

            $('[id*="quote-random_"]').attr('id',newId);
            $('[id*="quote-random_"]').html(msg.mainResponse);
            $('#quote-add-date-collection').html('Quote added <a href="#">' + formattedDate +'</a> to <a href="#">Quote Collection: ' + msg.category);
            $('#quote-who-source-author').html('--' + msg.who + ', from <i>' + msg.source + '</i> by ' + msg.author);
            $('#quote-reason').html(msg.reason);

            // set rating
            rating = msg.rating;
            for (var j=0; j<=rating; j++) {
                $('svg#fa' + j).attr('data-prefix','fas'); 
            }
            
        });
        
    $('#btn-next').on('click', function(event){
        event.preventDefault();
        idProp = $('[id*="quote-random"]').prop('id');
        collectionId = idProp.substr(13);

        $.ajax({
            method: "POST",
            url: "scripts/GetDbCollectionItems.php",
            data: {"collectionId":collectionId}
          })
            .done(function( msg ) {
                msg = JSON.parse(msg);
                var newId = 'quote-random_' + msg.collectionId;
                var addedDate = new Date(msg.recordedDate);
                var formattedDate = addedDate.toString("MMMM dd, yyyy");
                
                $('[id*="quote-random_"]').attr('id',newId);
                $('[id*="quote-random_"]').html(msg.mainResponse);
                $('#quote-add-date-collection').html('Quote added <a href="#">' + formattedDate +'</a> to <a href="#">Quote Collection: ' + msg.category);
                $('#quote-who-source-author').html('--' + msg.who + ', from <i>' + msg.source + '</i> by ' + msg.author);
                $('#quote-reason').html(msg.reason);

                // set rating. fas = filled star and far = empty star
                rating = msg.rating;
                for (var j=0; j<=5; j++) {
                    $('svg#fa' + j).attr('data-prefix','far'); 
                    if (j <= rating) {
                        $('svg#fa' + j).attr('data-prefix','fas'); 
                    }
                }    
            });
    });

    // if any of the star buttons are clicked, set the corresponding rating in the server.
    $('.star-button').on('click', function() {
        var status;
        var rating;
        var collectionTypeId = $('[id*="quote-random_"]').attr('id');

        for (var i=5; i>=0; i--) {
            status = $('svg#fa' + i).attr('data-prefix'); 
            if (status === 'fas') {
                // fas is solid star and far is empty star
                rating = i;
                break;
            }
        }

        $.ajax({
            method: 'POST',
            url: 'scripts/SaveRating.php',
            data: {
                "rating":rating,
                "collectionTypeId":collectionTypeId
            }
        }).done(function(msg){
            alert(msg);
        });
    });
});

/*

<!-- Note that fas = solid and far = empty-->
<button class='star-button' onclick="stars('fa1')"><i id="fa1" class="far fa-star"></i></button>
<button class='star-button' onclick="stars('fa2')"><i id="fa2" class="far fa-star"></i></button>
<button class='star-button' onclick="stars('fa3')"><i id="fa3" class="far fa-star"></i></button>
<button class='star-button' onclick="stars('fa4')"><i id="fa4" class="far fa-star"></i></button>
<button class='star-button' onclick="stars('fa5')"><i id="fa5" class="far fa-star"></i></button>

</span>
*/