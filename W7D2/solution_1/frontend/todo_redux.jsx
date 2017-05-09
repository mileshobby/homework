import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  // store = applyMiddlewares(store, [addLoggingToDispatch]);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// const addLoggingToDispatch = (store) => {
//   const dispatchStore = store.dispatch;
//   return (action)=>{
//     console.log(store.getState());
//     let returnval = dispatchStore(action);
//     console.log(store.getState());
//     return returnval;
//   };
// };
// 
// const addLoggingToDispatch = store => next=> action => {
//   console.log(store.getState());
//   next(action);
//   console.log(store.getState());
// };

// const applyMiddlewares = (store, middlewares) => {
//   let dispatch = store.dispatch;
//   middlewares.forEach(middleware=>{
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch});
// };
