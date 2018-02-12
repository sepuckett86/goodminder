$(document).ready(function () {
    $('#btn-prompt-submit').on('click', function(event){
        var collectionType = 'prompt';
        var answer; // main response
        var reason; // reason
        var promptId; 
        var promptIdNo; // promptId
        var postData;

        event.preventDefault();
        answer = $('#answer').val();
        reason = $('#reason').val();
        promptId = $('.paragraph-prompt').prop('id');
        promptIdNo = promptId.slice(promptId.search('_')+1);
        postData = {'collectionType': collectionType, 'promptId': promptIdNo, 'answer': answer, 'reason': reason};


        $.ajax({
            method: "POST",
            url: "serverReq/dbRequests.php",
            data: postData
          })
            .done(function( msg ) {
              // alert( "Data Saved: " + msg );
            });
    });
});

