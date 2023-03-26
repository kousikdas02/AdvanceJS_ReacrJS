let url = "https://fakestoreapi.com/users";


async function fetchUsers() {
    const response = await fetch(url);
    const Users = await response.json();
    // return Users;
    // console.log(Users);

    // for (let eachUser of Users){
    //     console.log(eachUser.id)
    // }

    for (let eachUser of Users){
        console.log(`User geolocation lat: ${eachUser.address.geolocation.lat}\nUser geolocation long: ${eachUser.address.geolocation.long}\nUser city: ${eachUser.address.city}\nUser street: ${eachUser.address.street}\nUser number: ${eachUser.address.number}\nUser zipcode: ${eachUser.address.zipcode}\nUser id: ${eachUser.id}\nUser email: ${eachUser.email}\nUser username: ${eachUser.username}\nUser password: ${eachUser.password}\nUser name: ${eachUser.name.firstname, eachUser.name.lastname}\n`)
    }

    // for (let i = 0; i < Users.length; i++){
    //     console.log(`User geolocation lat: ${Users[i].address.geolocation.lat}\nUser geolocation long: ${Users[i].address.geolocation.long}\nUser city: ${Users[i].address.city}\nUser street: ${Users[i].address.street}\nUser number: ${Users[i].address.number}\nUser zipcode: ${Users[i].address.zipcode}\nUser id: ${Users[i].id}\nUser email: ${Users[i].email}\nUser username: ${Users[i].username}\nUser password: ${Users[i].password}\nUser name: ${Users[i].name.firstname, Users[i].name.lastname}\n`)
    // }

}


fetchUsers()

