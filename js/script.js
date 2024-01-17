async function getUser(username) {
    let retUser = {};
    await fetch('./users.json').then(response => {
        return response.json();
    }).then(data => {
        let users = data.users;

        users.forEach(user => {
            if (user.username === username) {
                retUser = user;
                return
            }
        });   
        
    }).catch(err => {
        console.log(err);
    });
    return retUser;
}