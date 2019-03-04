import  React from 'react'
import ReactDOM from 'react-dom'
import {First, Second} from './component'

ReactDOM.render(
    <div>
        <First value='First' />
        <Second value='Second' />
    </div>
        
 , document.getElementById('app'))