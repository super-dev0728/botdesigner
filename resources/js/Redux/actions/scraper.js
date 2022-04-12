import axios from 'axios';

import { setAlert } from './alert';
import {
  GET_SCRAPERS,
  ADD_SCRAPER,
  GET_SCRAPER,
  DELETE_SCRAPER,
  UPDATE_SCRAPER,
  SCRAPER_ERROR
} from './types';

/**
 * Get all scrapers
 */
export const getScrapers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/scrapers');

    dispatch({
      type: GET_SCRAPERS,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: SCRAPER_ERROR,
      payload: { msg: err.response.status, status: err.response.status}
    });
  }
};

/**
 * Add a project
 */
export const addScraper = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/scrapers', formData, config);

    dispatch({
      type: ADD_SCRAPER,
      payload: res.data,
    });

    dispatch(setAlert('Scraper created', 'success'));
  } catch (err) {
    dispatch({
      type: SCRAPER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

/**
 * Get a scraper
 */
export const getScraper = (scraperId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/scrapers/${scraperId}`);

    dispatch({
      type: GET_SCRAPER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SCRAPER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

/**
 * Delete a scraper
 */
 export const deleteScraper = (scraperId) => async (dispatch) => {
  try {
    await axios.delete(`/api/scrapers/${scraperId}`);

    dispatch({
      type: DELETE_SCRAPER,
      payload: scraperId,
      // we return the array of likes
    });

    dispatch(setAlert('Scraper removed', 'success'));
  } catch (err) {
    dispatch({
      type: SCRAPER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


