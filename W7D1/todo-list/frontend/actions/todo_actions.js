export const RECIEVE_TODOS = "RECIEVE_TODOS";
export const RECIEVE_TODO = "RECIEVE_TODO";

export const recieveTodos = (todos)=> ({
  action: RECIEVE_TODOS,
  todos: todos
});

export const recieveTodo = (todo)=>({
  type: RECIEVE_TODO,
  todo: todo
});
