import {combineReducers} from 'redux';
import app from './app';
import user from './user';
import request from './request';

export default combineReducers({
  app,
  user,
  request,
});
