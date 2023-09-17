import { ADD_TO_CART, EMPTY_CART, END_LOADING, REMOVE_FROM_CART, START_LOADING } from '../constants/actionTypes'

export const addToCart = (item) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        dispatch({ type: ADD_TO_CART, payload: { item } })

        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
};

export const removeFromCart = (item) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        dispatch({ type: REMOVE_FROM_CART, payload: { item } })

        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
};

export const emptyCart = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        dispatch({ type: EMPTY_CART })

        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}
