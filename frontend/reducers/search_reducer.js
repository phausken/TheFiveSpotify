import { RECEIVE_RESULTS } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type){
    case RECEIVE_RESULTS:
      return action.results;
    default:
      return state;
    }
};

export default searchReducer;
