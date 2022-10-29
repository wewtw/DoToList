

//separate the ToDo functionality into a component.. Refactor – ToDo Component.
function Todo({todo,index,remove}){
  //removing function
  function handle(){
    console.log('Ping:',index);
    remove(index);
    
  }
  return <div className="todo" onClick={handle}>{todo.text}  X</div>
}
