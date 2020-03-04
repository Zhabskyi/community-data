import {
  ACTION_TYPES,
  Action,
  AppContextInterface
} from './types';


export default (state: AppContextInterface, action: Action<any>) => {
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
    case ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
