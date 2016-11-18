import React from 'react';
import client from '../clients/apollo';
import { ApolloProvider } from 'react-apollo';
import configureStore from '../store/configureStore';
import InitialPage from '../components/InitialPage';

const store = configureStore();
console.log(store.getState());
store.dispatch({type: "INCREMENT"});
console.log(store.getState());

const App = () => {
  return (
    <ApolloProvider store={store} client={client}>
      <InitialPage />
    </ApolloProvider>
  );
}

export default App;