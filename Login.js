function login() {
    if ($("#username").val() == "coba" && $("#password").val() == "test") {
        alert("You are a valid user" );
        // window.open("Home.html");
        window.open("Home.html", "_self");

    } else {
        alert("You are not a valid user");
        window.open("Login.html", "_self");
    }
}
