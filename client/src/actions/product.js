import { CREATE_PRODUCT, DELETE_PRODUCT, END_LOADING, FETCH_ALL, FETCH_ONE, SEARCH_PRODUCT, START_LOADING, UPDATE_PRODUCT } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.getProducts()

        dispatch({ type: FETCH_ALL, payload: data })
        // await localStorage.setItem('products', JSON.stringify(data))
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.getProduct(id);

        dispatch({ type: FETCH_ONE, payload: { product: data } });

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const searchProduct = (searchData) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.searchProduct(searchData);
    
        dispatch({ type: SEARCH_PRODUCT, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = (product, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createProduct(product)

        dispatch({ type: CREATE_PRODUCT, payload: data })

        history.push('/admin')
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.updateProduct(id, product)

        dispatch({ type: UPDATE_PRODUCT, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await await api.deleteProduct(id)

        dispatch({ type: DELETE_PRODUCT, payload: id })
    } catch (error) {
        console.log(error)
    }
}
