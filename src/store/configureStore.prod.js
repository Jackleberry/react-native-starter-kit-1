import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middlewares = [
    thunkMiddleware
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}
