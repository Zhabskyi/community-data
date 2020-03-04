import { CommunitiesInterface } from '../models/communities';
import { HomesInterface } from '../models/homes';
import { ACTION_TYPES } from './actionTypes';

export interface Action<T> {
  type: string;
  payload?: T;
}

//State interface

export interface AppContextInterface {
  communities: Array<CommunitiesInterface>;
  homes: Array<HomesInterface>;
  loading: boolean;
  error: string;
}

//Action interface

export interface GetCommunitiesAction {
  type: typeof ACTION_TYPES.GET_COMMUNITIES;
  payload: CommunitiesInterface;
}

export interface GetHomeInterface {
  type: typeof ACTION_TYPES.GET_HOMES;
  payload: string;
}

export interface GetErrorInterface {
  type: typeof ACTION_TYPES.SET_ERROR;
  payload: HomesInterface;
}

export type ActionTypes =
  | GetCommunitiesAction
  | GetHomeInterface
  | GetErrorInterface;
