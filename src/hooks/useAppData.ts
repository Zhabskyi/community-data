import { useEffect, useReducer } from "react";
import { axiosInstance } from '../utils/axiosInstance';
import { ACTION_TYPES } from '../context/types';
import { reducer } from '../context/reducer';
import { INITIAL_STATE } from '../context/reducer';

export const useAppData = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    Promise.all([axiosInstance.get('/communities'), axiosInstance.get('/homes')])
      .then(res => {
        console.log('RESOPCE', res);
        const communities = res[0].data;
        const homes = res[1].data;

        dispatch({
          type: ACTION_TYPES.GET_COMMUNITIES,
          payload: communities
        });

        dispatch({
          type: ACTION_TYPES.GET_HOMES,
          payload: homes
        });

        dispatch({
          type: ACTION_TYPES.SET_LOADING
        });
      })
      .catch(error => {
        dispatch({
          type: ACTION_TYPES.SET_ERROR,
          payload: error.response
        });
      });
    return () => {};
    // eslint-disable-next-line
  }, []);

  return {
    state
  };
};
