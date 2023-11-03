fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.reduce((accumulator,currently)=>{
      if(currently.completed==true){
         if(currently.userId in accumulator){
            accumulator[currently.userId]++
         }else{
            accumulator[currently.userId] = 1
         }
      }
      return accumulator
     },{})
     console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
