/* eslint-disable import/no-anonymous-default-export */
import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR
} from '../actions/types';

const initialState = {
  projects: [],
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECTS:
    return {
        ...state,
        projects: payload.projects,
        loading: false
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [payload, ...state.projects],
        loading: false
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((project) => project._id !== payload),
        loading: false
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }

}

