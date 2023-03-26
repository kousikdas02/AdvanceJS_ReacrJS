let url = "https://jsonplaceholder.typicode.com/albums";


async function fetchAlbums() {
    const response = await fetch(url);
    const albums = await response.json();
    // return albums;
    // console.log(albums);

    // for (let eachAlbum of albums){
    //     console.log(eachAlbum.id)
    // }

    for (let eachAlbum of albums){
        console.log(`Album user id is: ${eachAlbum.userId},\nAlbum id is: ${eachAlbum.id} \nAlbum title: ${eachAlbum.title}\n`)
    }

    // for (let i = 0; i < albums.length; i++){
    //     console.log(`Album user id is: ${albums[i].userId},\nAlbum id is: ${albums[i].id} \nAlbum title: ${albums[i].title}\n`)

    // }

}


fetchAlbums()

