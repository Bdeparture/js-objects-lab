fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter(function (todo){
        return todo.completed == true;
     }).reduce((accumulator) => 
        accumulator + 1,0)  // Complete this code
     console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });