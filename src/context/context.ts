import { createContext } from 'react';

interface IContextProps {
  state: IState;
  dispatch: ({type}:{type:string}) => void;
}

const context = createContext({} as IContextProps);

export default context;