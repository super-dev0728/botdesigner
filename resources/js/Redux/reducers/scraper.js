/* eslint-disable import/no-anonymous-default-export */
import {
  GET_SCRAPERS,
  GET_SCRAPER,
  ADD_SCRAPER,
  DELETE_SCRAPER,
  SCRAPER_ERROR
} from '../actions/types';

const initialState = {
  scrapers: [],
  scraper: null,
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SCRAPERS:
      return {
        ...state,
        scrapers: payload.scrapers,
        loading: false
      };
    case GET_SCRAPER:
      return {
        ...state,
        scraper: payload.scrapers,
        loading: false
      };
    case ADD_SCRAPER:
      return {
        ...state,
        scrapers: [payload, ...state.scrapers],
        loading: false
      };
    case DELETE_SCRAPER:
      return {
        ...state,
        scrapers: state.scrapers.filter((scraper) => scraper.id !== payload),
        loading: false
      };
    case SCRAPER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }

}

