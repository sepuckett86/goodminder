$(document).ready(function () {
    $('#btn-prompt-submit').on('click', function(event){
        var collectionType = 'prompt';
        var answer; // main response
        var reason; // reason
        var promptId; 
        var promptIdNo; // promptId
        var postData;

        event.preventDefault();
        answer = $('#prompt-answer').val();
        reason = $('#prompt-reason').val();
        promptId = $('.paragraph-prompt').prop('id');
        promptIdNo = promptId.slice(promptId.search('_')+1);
        postData = {'collectionType': collectionType, 'promptId': promptIdNo, 'answer': answer, 'reason': reason};

        $.ajax({
            method: "POST",
            url: "serverReq/dbRequests.php",
            data: postData
          })
            .done(function( msg ) {
                alert( "Prompt data saved on " + msg );
            });
    });
    $('#btn-quote-submit').on('click', function(event){
        var collectionType = 'quote';
        var quote; // main response
        var who; 
        var source; 
        var author;
        var reason;
        var category; 
        var postData;

        event.preventDefault();
        quote = $('#quote').val();
        who = $('#quote-who').val();
        source = $('#quote-source').val();
        author = $('#quote-author').val();
        reason = $('#quote-reason').val();
        category = $('#quote-category').val();

        postData = { 'collectionType': collectionType, 'quote': quote, 'who': who, 'source': source, 'author': author, 'reason': reason, 'category': category };

        $.ajax({
            method: "POST",
            url: "serverReq/dbRequests.php",
            data: postData
          })
            .done(function( msg ) {
                alert( "Quote data saved on " + msg );
            });
    });
    $('#btn-custom-submit').on('click', function(event){
        var collectionType = 'custom';
        var customText; // main response
        var category; 
        var postData;

        event.preventDefault();
        customText = $('#customText').val();
        category = $('#custom-category').val();
        postData = { 'collectionType': collectionType, 'customText': customText, 'category': category };

        $.ajax({
            method: "POST",
            url: "serverReq/dbRequests.php",
            data: postData
          })
            .done(function( msg ) {
                alert( "Custom Items saved on " + msg );
            });
    });
});

