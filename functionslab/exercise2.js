fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todoTitles = json.map(function(todoTitles){
        return todoTitles.title
     }) // Complete this code
     console.log(todoTitles)
  })
  .catch(function(err) { 
    console.log(err);  
  });