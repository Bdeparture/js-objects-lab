fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.reduce((accumulator,currently)=>{
      if(currently.completed==false){
         return [...accumulator,{userId:currently.userId,title:currently.title}]
      }
      return accumulator
     },[])
     console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
