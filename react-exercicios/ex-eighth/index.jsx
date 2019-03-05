import  React from 'react'
import ReactDOM from 'react-dom'
import Contador from './Contador'

ReactDOM.render( 
      <Contador  label='Calculador' initiaValue={10}  value={10} />
     
, document.getElementById('app'))