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
                            <h2>${user.name}</h2>
                            <p>ID: ${user.id}</p>
                            <div class="email_details">
                              <span>Email: </span>
                              <a href="email:${user.email}">${user.email}</a>
                            </div>
                            <div class="phone_details">
                              <span>Phone: </span>
                              <a href="tel:+${user.phone}">${user.phone}</a>
                            </div>
                            <div class="address_details">
                              <p>Street: ${user.address.street}</p>
                              <p>Suite: ${user.address.suite}</p>
                              <p>City: ${user.address.city}</p>
                              <p>Zipcode: ${user.address.zipcode}</p>
                              <p>Geo Location: ${user.address.geo}</p>
                            </div>

                            <div class="company_info">
                              <p>Company Name: <b>${user.company.name}</b></p>
                            </div>
                        </div>`;

    createHTML += htmlSegment;
  });

  let user = document.querySelector('.user');
  user.innerHTML = createHTML;
}
getUsers();
