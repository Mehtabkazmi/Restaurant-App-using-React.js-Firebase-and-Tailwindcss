import { fetch, fetchCart } from '../utils/fetchLocalData';

const userInfo = fetch();
const cartInfo = fetchCart();
export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems:cartInfo,
}