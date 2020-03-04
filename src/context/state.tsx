import React, { useReducer } from 'react';
import { Context } from "./context";
import reducer from './reducer';
import { ACTION_TYPES, AppContextInterface, ActionTypes } from './types';
import axios from '../utils/axiosInstance';


const initialState: AppContextInterface = {
  communities: [],
  homes: [],
  error: ''
};

export const State = (props:any) => {

  const [state, dispatch] = useReducer<
    React.Reducer<AppContextInterface, ActionTypes>
  >(reducer, initialState);

  const getCommunities = async () => {
    try {
      const res = await axios.get('/communities');
      const communities = res.data;
      dispatch({
        type: ACTION_TYPES.GET_COMMUNITIES,
        payload: communities
      });
    } catch (err) {
      dispatch({
        type: ACTION_TYPES.SET_ERROR,
        payload: err.response
      });
    }
  };

  const getHomes = async () => {
    try {
      const res = await axios.get('/homes');
      const homes = res.data;
      dispatch({
        type: ACTION_TYPES.GET_HOMES,
        payload: homes
      });
    } catch (err) {
      dispatch({
        type: ACTION_TYPES.SET_ERROR,
        payload: err.response
      });
    }
  };

  return (
    <Context.Provider value={{getHomes, getCommunities}}>
      {props.children}
    </Context.Provider>
  );
};
