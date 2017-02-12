function saveNewUser() {
    var username = document.getElementById("username").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var mdp = document.getElementById("mdp").value;
    var mdpconf = document.getElementById("mdpconf").value;
    var Genre = document.getElementById("Genre").value;
    var Age = document.getElementById("Age").value;

    if (mdp = !mdpconf) {
        alert("frefer");
        $("#errorMessage").append("<h2> le mot de passe et le mot de passe de confirmation ne sont pas identiques </h2>");
        return false;
    }

    $.ajax({
        method: "GET",
        url: "/Home/checkNotexistUserName",
        data: { username: username },
        success: function (response) {
        $("#errorMessage").append("<h2>"+ response +"</h2>");
        }
    });
    
    $.ajax({
        method: "POST",
        url: "/Home/saveNewUser",
        data: {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            mdp: mdp,
            Age: Age,
            Genre: Genre
        },
        success: function (response) {
            
            $("#confirmMessage").append("<h2> votre inscription a été prise en compte</h2>")
        }

    });
}