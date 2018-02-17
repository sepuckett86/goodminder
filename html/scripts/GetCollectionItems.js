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
            
            $('[id*="quote-random_"]').attr('id',newId);
            $('[id*="quote-random_"]').html(msg.mainResponse);
            $('#quote-add-date-collection').html('Quote added <a href="#">' + formattedDate +'</a> to <a href="#">Quote Collection: ' + msg.category);
            $('#quote-who-source-author').html('--' + msg.who + ', from <i>' + msg.source + '</i> by ' + msg.author);
            $('#quote-reason').html(msg.reason);
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
            });
    });
});

