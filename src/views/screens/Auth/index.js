import Component from './Component';
import {connect} from 'react-redux';
import {setUser} from '../../../redux/actions';

const mapStateToProps = state => ({
  storedUser: state.user.user,
});

export default connect(
  mapStateToProps,
  {setUser},
)(Component);
