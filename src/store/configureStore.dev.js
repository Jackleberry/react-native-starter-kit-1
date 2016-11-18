import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import apolloClient from '../clients/apollo';

export default function configureStore(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunkMiddleware,
    apolloClient.middleware()
  ];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}
