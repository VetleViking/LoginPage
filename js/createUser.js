document.getElementById("createUserBtn").addEventListener("click", async function() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let image = document.getElementById("image").value;

    let user = {
        username: username,
        email: email,
        password: password,
        image: image
    };

    // write user to users.json
});