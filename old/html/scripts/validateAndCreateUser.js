$(document).ready(function(){
    $('#btn-signup').on('click',function(event){
        var userName;
        var userUniqueName;
        var userEmail;
        var userPassword;
        var errorMessage;

        event.preventDefault();
        $(".alert").hide();

        userName = $('#inputName').val();
        userUniqueName = $('#inputUserName').val();
        userEmail = $('#inputEmail').val();
        userPassword = $('#inputPassword').val();
        userPasswordConfirm = $('#inputPassword2').val();
        
        if (userPassword !== userPasswordConfirm) {
            errorMessage = '<button class="close" data-dismiss="alert">&times;</button><strong>Sorry! </strong>Passwords do not match.';

            $('.alert').html(errorMessage);
            $('.alert').show();
        } else if (passwordIsValid(userPassword) !== true) {
            $('.alert').html('<button class="close" data-dismiss="alert">&times;</button><strong>Sorry! </strong>' + passwordIsValid(userPassword));
            $('#inputPassword').val('');
            $('#inputPassword2').val('');
            $('.alert').show();
        } else {
        // send user info to server
            $.ajax({
                method: 'POST',
                url: 'scripts/createNewUser.php',
                data: {
                    "userName":userName,
                    "userUniqueName":userUniqueName,
                    "userEmail":userEmail,
                    "userPassword":userPassword
                }
            }).done(function(msg){
                $('.alert').html(msg);
                $('.alert').show();
            });
        }
        


        // if fail, receive message from server, remove password entries, but keep the rest

        // if successful, send information to server
    });
});

// Password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
function passwordIsValid(passwordToCheck)
{
    var letterNumberPattern = /[A-Za-z0-9]+/;
    var match = letterNumberPattern.exec(passwordToCheck)[0];

    if (passwordToCheck.length < 8 ) {
        return 'Password is too short.';
    } else if (passwordToCheck > 20) {
        return 'Password is too long.';
    } else if (match !== passwordToCheck) {
        return 'Password should only contains letters and numbers.';
    } else {
        return true;
    }
}