import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const login = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.logIn(formData)

        dispatch({ type: AUTH, data })

        router.push('/admin')
    } catch (error) {
        console.log(error)
    }
}

export const createAdmin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.createAdmin(formData)

        dispatch({ type: AUTH, data })

        router.push('/admin')
    } catch (error) {
        console.log(error)
    }
}
