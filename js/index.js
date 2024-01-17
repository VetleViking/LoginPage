window.addEventListener("load", async function() {
    if (!window.location.href.includes("username")) {
        window.location.href = "login.html";
    }

    let username = window.location.href.split("=")[1];
    username = username.split("%20").join(" ");
    console.log(username);
    let loggedInUser = {};

    await getUser(username).then(user => {
        loggedInUser = user;
        console.log(loggedInUser);
    });

    console.log(loggedInUser.username);

    let userDiv = document.getElementById("loginInfo");
    userDiv.innerHTML = `
        <p>${loggedInUser.username}</p>
        <p>${loggedInUser.email}</p>
        <p>${loggedInUser.password}</p>
        <image src="${loggedInUser.image}" />
    `;
});