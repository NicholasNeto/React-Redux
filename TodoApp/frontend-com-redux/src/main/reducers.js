import { combineReducers } from 'redux'
import todoRedulcer  from '../todo/todoRedulcer'

const rootReducers = combineReducers({
    todo: todoRedulcer    
    
})


export default rootReducers
