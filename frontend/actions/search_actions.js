import * as APIUtil from "../util/search_util";

export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

export const receiveResults = results => {
  return {
    type: RECEIVE_RESULTS,
    results
  };
};

export const fetchResults = search => dispatch => {
  return APIUtil.fetchResults(search).then(results =>
    dispatch(receiveResults(results))
  );
};
