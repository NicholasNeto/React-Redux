import  React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'
import {combineReducers , createStore} from 'redux'
import {Provider} from 'react-redux' 
import  fieldReducers  from "./fieldReducers"

const reducers = combineReducers({
      field: fieldReducers
})

ReactDOM.render( 
      <Provider store={createStore(reducers)}>
            <Field  initialValue='Teste'  />
     </ Provider>
, document.getElementById('app'))   

