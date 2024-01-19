window.addEventListener("load", async function() {
    if (!window.location.href.includes("username")) {
        window.location.href = "login.html";
    }

    let username = window.location.href.split("=")[1];
    username = username.split("%20").join(" ");
    let loggedInUser = {};

    await getUser(username).then(user => {
        loggedInUser = user;
    });

    if (loggedInUser.username === undefined) {
        //window.location.href = "login.html?error=notfound";
    }

    let userDiv = document.getElementById("loginInfo");
    userDiv.innerHTML = `
        <p>${loggedInUser.username}</p>
        <p>${loggedInUser.email}</p>
        <p>${loggedInUser.password}</p>
        <image src="${loggedInUser.image}" />
    `;
});

document.getElementById("logout").addEventListener("click", function() {
    window.location.href = "login.html";
});