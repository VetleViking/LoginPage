async function getUser(username) {
  let retUser = {};
  await fetch("./users.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let users = data.users;

      users.forEach((user) => {
        if (user.username === username) {
          retUser = user;
          return;
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return retUser;
}

const css_code = document.getElementById('css-code');
const styleHtml = document.getElementById('styleDiv');

function run() {
    styleHtml.innerHTML = css_code.value;
}

css_code.onkeyup = () => run();