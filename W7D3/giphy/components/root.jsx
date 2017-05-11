import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';

const Root = ({ store }) => {
  // debugger
  return (
    <Provider store={store}>
        <GiphysSearchContainer/>
    </Provider>
  );
};

export default Root;
