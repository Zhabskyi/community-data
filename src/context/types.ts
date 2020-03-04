import { CommunitiesInterface, HomesInterface } from "../models/Data";

export enum ACTION_TYPES {
  GET_COMMUNITIES = 'GET_COMMUNITIES',
  GET_HOMES = 'GET_HOMES',
  SET_ERROR = 'SET_ERROR'
};

export interface Action<T> {
  type: string;
  payload?: T;
};

//State interface

export interface AppContextInterface {
  communities: Array<CommunitiesInterface>;
  homes: Array<HomesInterface>;
  error: string;
}

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
