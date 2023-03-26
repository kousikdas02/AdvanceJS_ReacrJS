let url = "https://fakestoreapi.com/products";


async function fetchproducts() {
    const response = await fetch(url);
    const products = await response.json();
    // return products;
    // console.log(products);

    // for (let eachProduct of products){
    //     console.log(eachProduct.id)
    // }

    for (let eachProduct of products){
        console.log(`Product id is: ${eachProduct.id}, \nProduct title: ${eachProduct.title}\nProduct Price: ${eachProduct.price} \nProduct Description: ${eachProduct.description} \nProduct category: ${eachProduct.category} \nProduct img: ${eachProduct.image} \nProduct rating rate: ${eachProduct.rating.rate} \nProduct rating count: ${eachProduct.rating.count}` )
    }

    // for (let i = 0; i < products.length; i++){
    //     console.log(`Product id is: ${products[i].id}, \nProduct title: ${products[i].title}\nProduct Price: ${products[i].price} \nProduct Description: ${products[i].description} \nProduct category: ${products[i].category} \nProduct img: ${products[i].image} \nProduct rating rate: ${products[i].rating.rate} \nProduct rating count: ${products[i].rating.count}` )
    // }

}


fetchproducts()

