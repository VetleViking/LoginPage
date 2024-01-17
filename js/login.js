document.getElementById("loginBtn").addEventListener("click", async function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    await getUser(username).then(user => {
        if (user.password === password) {
            window.location.href = `index.html?username=${username}`;
        } else {
            console.log("Incorrect password");
        }
    });
});