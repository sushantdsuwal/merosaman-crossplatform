import { combineReducers } from 'redux';
import ListReducer from './reducers/ListReducer';

const rootReducer = combineReducers({
  ListState: ListReducer,
});

export default rootReducer;
