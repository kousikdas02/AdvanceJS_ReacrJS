let url = "https://jsonplaceholder.typicode.com/todos";


async function fetchTodos() {
    const response = await fetch(url);
    const Todos = await response.json();
    // return Todos;
    // console.log(Todos);

    // for (let eachTodo of Todos){
    //     console.log(eachTodo.id)
    // }

    for (let eachTodo of Todos){
        console.log(`Todo user id is: ${eachTodo.userId},\nTodo id is: ${eachTodo.id} \nTodo title: ${eachTodo.title}\nTodo staus: ${eachTodo.completed}`)
    }

    for (let i = 0; i < Todos.length; i++){
        console.log(`Todo user id is: ${Todos[i].userId},\nTodo id is: ${Todos[i].id} \nTodo title: ${Todos[i].title}\nTodo title: ${Todos[i].completed}`)

    }

}


fetchTodos()

