fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter(function (todo){
        return todo.completed == false;
     })  // Complete this code
     completed.forEach( (todo, index) => {
      console.log(`${todo.userId} - ${todo.completed}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });