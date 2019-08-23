import axios from 'axios'
import {TODO_CLEAR, 
    TODO_SEARCHED, 
    TODO_ADDED, 
    TODO_MARKED_AS_DONE, 
    TODO_MARKED_AS_PENDING,
    REMOVE,
    DESCRIPTION_CHANGED} from './constante'
import { resolve } from 'path';


const URL = 'http://localhost:3003/api/todos'

export const changeDescripition = event => ({
    type: DESCRIPTION_CHANGED,
    payload: event.target.value
})



export const search = () => {
 return (dispatch, getState) => {
    const description = getState().todo.description
    const search = description ? `&description__regex=/${description}/`: ''
    axios.get(`${URL}?sort=-createdAt${search}`)
        .then(res => dispatch({type: TODO_SEARCHED, payload: res.data}))
 }   
}


export const add = (description) => {
    return dispatch => {
        return axios.post(URL, { description })
            .then(res => dispatch({ type: TODO_ADDED, payload: res.data }))
            .then(res => dispatch(search()))
            .catch(err => undefined) 
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then( res => dispatch({ type: TODO_MARKED_AS_DONE, payload: res.data}))
        .then(res => dispatch(search()))    
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(res => dispatch({ type:TODO_MARKED_AS_PENDING, payload: res.data }))
            .then(res => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(res => dispatch({ type:REMOVE, payload: res.data }))
        .then( res => dispatch(search()))
    }
}

export const clear = () => {
    return [{
        type: TODO_CLEAR,
    }, search()]
}