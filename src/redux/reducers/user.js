import {SET_USER, LOGOUT} from '../constants';

const initialState = {
  user: undefined,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        ...initialState,
      });
    default:
      return state;
  }
}
