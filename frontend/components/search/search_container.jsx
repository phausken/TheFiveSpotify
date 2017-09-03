import { connect } from 'react-redux';
import { fetchResults } from '../../actions/search_actions';
import Search from './search';
import { getAllResults } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    results: getAllResults(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveResults: (search) => dispatch(fetchResults(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
