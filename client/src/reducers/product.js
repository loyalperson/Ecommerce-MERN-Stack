import { CREATE_PRODUCT, DELETE_PRODUCT, END_LOADING, FETCH_ALL, FETCH_ONE, SEARCH_PRODUCT, START_LOADING, UPDATE_PRODUCT } from '../constants/actionTypes'

const productReducer = (state = { isLoading: true, products: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            localStorage.setItem('products', JSON.stringify(action.payload.data))
            return { ...state, products: action.payload.data };
        case FETCH_ONE:
            return { ...state, product: action.payload.product };
        case SEARCH_PRODUCT:
            return { ...state, products: action.payload.data };
        case CREATE_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case UPDATE_PRODUCT:
            return { ...state, products: state.products.map((product) => (product._id === action.payload._id ? action.payload : product)) };
        case DELETE_PRODUCT:
            return { ...state, products: state.products.filter((product) => product._id !== action.payload) };
        default:
            return state;
    }
}

export default productReducer
