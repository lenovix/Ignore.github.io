function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "admin"){
        window.location = "homepage.html"; // Redirecting to other page.
        return false;
    }else{
        alert("You wrong username or password");
    }
}