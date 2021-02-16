import Component from './Component';
import {connect} from 'react-redux';

const mapStateToProps = state => ({user: state.user.user});

export default connect(mapStateToProps)(Component);
