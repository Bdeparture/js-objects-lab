fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json // Complete this code
     completed.forEach( (todo, index) => {
      todoTitles = todo.title
      console.log(todoTitles)
    })
  })
  .catch(function(err) { 
    console.log(err);  
  });