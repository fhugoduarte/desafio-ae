import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import movie from './movie';

const appReducer = combineReducers({
  movie,
  toastr: toastrReducer,
  form: formReducer,
});

export default appReducer;