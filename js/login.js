window.addEventListener("load", async function() {
    if (window.location.href.includes("error")) {
        let errorMsg = window.location.href.split("=")[1];
        const errorDiv = document.getElementById("error");
        if (errorMsg === "notfound") {
            errorDiv.innerHTML = "User not found";
        }
    }

});

document.getElementById("loginBtn").addEventListener("click", async function() {
    const errorDiv = document.getElementById("error");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    await getUser(username).then(user => {
        if (user.username == undefined) {  
            errorDiv.innerHTML = "User not found";
        } else if (user.password == password) {
            window.location.href = `index.html?username=${username}`;
        } else {
            errorDiv.innerHTML = "Incorrect password";
        }
    });
});