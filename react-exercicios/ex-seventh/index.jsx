import  React from 'react'
import ReactDOM from 'react-dom'
import Family  from './family'
import Member from './member'

ReactDOM.render( 
    <Family lastName='Neto' > 
        <Member name="Nicols" />
        <Member name="THaly" />
        <Member name="Isadora" />
        <Member name="Katia" />
     </Family>  
     
, document.getElementById('app'))