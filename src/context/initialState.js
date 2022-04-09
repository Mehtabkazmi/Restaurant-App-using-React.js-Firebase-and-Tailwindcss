import { fetch } from '../utils/fetchLocalData';

const userInfo = fetch();
export const initialState = {
    user: userInfo,
    foodItems:null,
}