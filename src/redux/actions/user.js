import {SET_USER} from '../constants';

export const setUser = user => (dispatch, getState) => {
  dispatch({
    type: SET_USER,
    payload: user,
  });
};
