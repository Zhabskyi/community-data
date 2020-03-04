import { Action, AppContextInterface } from './types';
import { ACTION_TYPES } from './actionTypes';

export const INITIAL_STATE: AppContextInterface = {
  communities: [],
  homes: [],
  loading: true,
  error: ''
};

export const reducer = (state: AppContextInterface, action: Action<any>) => {
  switch (action.type) {
    case ACTION_TYPES.GET_COMMUNITIES:
      return {
        ...state,
        communities: action.payload
      };
    case ACTION_TYPES.GET_HOMES:
      return {
        ...state,
        homes: action.payload
      };
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    case ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};
