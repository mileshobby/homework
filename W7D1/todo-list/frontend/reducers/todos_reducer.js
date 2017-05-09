import {RECEIVE_TODOS, RECEIVE_TODO, receiveTodos, receiveTodo} from './../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

export const todosReducer = (state = initialState, action) =>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_TODOS:
      action.todos.forEach(todo=>{newState[todo.id]=todo;});
      return newState;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return merge(newState, state);
    default:
      return state;
  }
};

export default todosReducer;
