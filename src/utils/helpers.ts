import { AppContextInterface } from '../store/types';

export const homeAveragePrice = (state:AppContextInterface, id:string ) => {
  const filteredHomes = state.homes.filter(item => item.communityId === id, []);
  let result = 0;
  for (const item of filteredHomes) {
    result += item.price;
  }
  return result;
};