/* eslint-disable import/no-anonymous-default-export */
import {
  GET_PROJECTS,
  GET_PROJECT,
  ADD_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR
} from '../actions/types';

const initialState = {
  projects: [],
  project: null,
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
    case GET_PROJECT:
    return {
        ...state,
        project: payload.projects,
        loading: false
      };
    case ADD_PROJECT:
      console.log(payload);
      return {
        ...state,
        projects: [payload, ...state.projects],
        loading: false
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== payload),
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

