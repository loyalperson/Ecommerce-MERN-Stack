import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../constants/actionTypes'

const cartReducer = (state = { products: [], cart: [], currentItem: null }, action) => {
    state.products = JSON.parse(window.localStorage.getItem('products'));
    switch (action.type) {
        case ADD_TO_CART:
            // Great Item data from products array
            console.log(state.products)
            const item = state.products.find((product) => {
                return product._id === action.payload.item._id
            });
            console.log(item, 'itemm')
            // Check if Item is in cart already
            const inCart = state?.cart?.find((item) =>
                item._id === action.payload.item._id ? true : false
            );

            const totalPrice = state?.cart?.reduce((acc, curr) => acc + curr.price*curr.qty, 0);

            return {
                ...state,
                totalPrice,
                cart: inCart
                    ? state.cart.map((item) =>
                        item._id === action.payload.item._id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                        )
                    : [...state.cart, { ...item, qty: 1 }],
            }
            
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart
                    .map((item) =>
                        item._id === action.payload.item._id
                            ? { ...item, qty: item.qty - 1 }
                            : item
                        )
                    .filter((item) => item.qty > 0)
            }
        case EMPTY_CART:
            return { ...state, cart: [] }
        default:
            return state;
    }
}

export default cartReducer
