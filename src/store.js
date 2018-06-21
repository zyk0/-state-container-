import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default () => {
  const middleware = applyMiddleware(thunk);
  const store = createStore(rootReducer, middleware);
  return store;
};
