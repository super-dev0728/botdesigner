import { combineReducers } from "redux";
import alert from './alert';
import auth from './auth';
import project from './project';
import scraper from './scraper';

export default combineReducers({
  alert,
  auth,
  project,
  scraper
});
