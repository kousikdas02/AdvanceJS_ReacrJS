async function getUsers() {
  let url = 'https://jsonplaceholder.typicode.com/users';
  let createHTML = '';
  try {
    let res = await fetch(url);
    var userData = await res.json();
    console.log(userData);
  } catch (error) {
    console.log(error);
  }

  userData.forEach((user) => {
    let htmlSegment = `<div class="userDetails">
                            <img src="${user.profileURL}" >
                            <h2>${user.firstName} ${user.lastName}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                        </div>`;

    createHTML += htmlSegment;
  });

  let user = document.querySelector('.user');
  user.innerHTML = createHTML;
}
getUsers();
