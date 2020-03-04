import { useEffect, useReducer } from 'react';
import { axiosInstance } from '../utils/axiosInstance';
import { ACTION_TYPES } from '../store/actionTypes';
import { CommunitiesInterface } from '../models/communities';
import { reducer } from '../store/reducer';
import { INITIAL_STATE } from '../store/reducer';

export const useAppData = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    Promise.all([
      axiosInstance.get('/communities'),
      axiosInstance.get('/homes')
    ])
      .then(res => {
        const communities = res[0].data;
        const homes = res[1].data;

        communities.sort((a: CommunitiesInterface, b: CommunitiesInterface) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

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
  }, []);

  return {
    state
  };
};
