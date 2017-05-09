import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';
import allTodos from './frontend/reducers/selectors';
import rootReducer from './frontend/reducers/root_reducer';
import App from './frontend/components/app';

class Root extends React.Component{
  render(){
    return(
      <div id='root'>
        <App/>
      </div>
    );
  }
}

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

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // TODO: remove from the window
  window.store = store;

  ReactDOM.render(<Root/>, document.getElementById('content'));
});
