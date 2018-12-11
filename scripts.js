$("#contactForm").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
    } else {
        // everything looks good!
        formSuccess;
        event.preventDefault();
        submitForm();
    }
});
function submitForm(){
// Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var webpage = $("#webpage").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message + "&webpage=" + webpage,
        success : function(text){
            if (text == "success"){
                console.log(webpage);
                formSuccess();
            }
        }
    });
    }
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}