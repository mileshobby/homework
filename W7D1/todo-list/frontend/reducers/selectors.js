

const allTodos = (state)=>{
  return Object.keys(state.todos).map((id)=>state.todos[id]);
};

// TODO: remove from window
window.allTodos = allTodos;

export default allTodos;
