function getData(){
    console.log("started fetching data");
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("from first then()");
        return response.json()
    }).then((data)=>{
        console.log("from second then()");
        console.log(data);
    })
}

getData()