import axios from 'axios';

import { setAlert } from './alert';
import {
  GET_PROJECTS,
  ADD_PROJECT,
  GET_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  PROJECT_ERROR,
  ASSOCIATE_SCRAPER
} from './types';

/**
 * Get all projects
 */
export const getProjects = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/projects');

    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.status, status: err.response.status}
    });
  }
};

/**
 * Add a project
 */
export const addProject = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/projects', formData, config);
    console.log(res.data.project);
    dispatch({
      type: ADD_PROJECT,
      payload: res.data.project,
    });

    dispatch(setAlert('Project created', 'success'));
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

/**
 * Get a project
 */
export const getProject = (projectId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/${projectId}`);

    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

/**
 * Delete a project
 */
export const deleteProject = (projectId) => async (dispatch) => {
  try {
    await axios.delete(`/api/projects/${projectId}`);

    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });

    dispatch(setAlert('Project removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

/**
 *  Associate a Bot/Scraper
 */
export const associateScraper = (projectId, scraperId) => async (dispatch) => {

  try {
    const res = await axios.post(`/api/projects/${projectId}`, scraperId);
    dispatch({
      type: ASSOCIATE_SCRAPER,
      payload: res.data,
    });

    dispatch(setAlert('Project created', 'success'));
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
}