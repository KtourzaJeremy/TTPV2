function checkUserjs()
{
    var pswd = document.getElementById("pass").value;
    var username = document.getElementById("logID").value;

    $.ajax({
        method: "GET",
        url: "/Home/checkUser",
        data: {
            pswd: pswd,
            username: username
        },
        success: function (response) {
            
            if (response == true)
                document.location.href = "/Home/AccueilUser";

            else
                $("#errorMessage").empty();
                $("#pass").empty();
                $("#errorMessage").append("<h2>vous avez saisie un mauvais mot de passe</h2>")
        }

    });

}