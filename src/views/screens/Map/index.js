import Component from './Component';
import {connect} from 'react-redux';

const setRequest = payload => dispatch =>
  dispatch({type: 'SET_REQUEST', payload});

export default connect(
  state => ({request: state.request.data}),
  {setRequest},
)(Component);
