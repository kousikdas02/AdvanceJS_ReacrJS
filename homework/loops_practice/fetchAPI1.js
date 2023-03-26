let url = "https://jsonplaceholder.typicode.com/comments";


async function fetchPosts() {
    const response = await fetch(url);
    const posts = await response.json();
    // return posts;
    // console.log(posts);

    // for (let eachPost of posts){
    //     console.log(eachPost.id)
    // }

    // for (let eachPost of posts){
    //     console.log(`Post id is: ${eachPost.id},\nPost email is: ${eachPost.email} \nPost content: ${eachPost.body}\n`)
    // }

    for (let i = 0; i < posts.length; i++){
        console.log(`Post id is: ${posts[i].id},\nPost email is: ${posts[i].email} \nPost content: ${posts[i].body}\n`)

    }

}


fetchPosts()

