fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.filter(function (todo){
        return todo.completed == false
     }).map(function(uncompleted){
        userId = uncompleted.userId;
        title = uncompleted.title
        return{
          userId:userId,
          title:title,
        }
     })  // Complete this code
     console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });