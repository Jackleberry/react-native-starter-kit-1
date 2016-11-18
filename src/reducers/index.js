import { combineReducers } from 'redux';
import apolloClient from '../clients/apollo';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
  apollo: apolloClient.reducer()
}) 

export default rootReducer;
