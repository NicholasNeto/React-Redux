import React from 'react'
import If from '../helpers/If'

const IconButton = (props) => (

    <If test={!props.hide}>
        <button className={'btn btn-' + props.style}>
            <i className={'fa fa-' + props.icon}></i>
        </button>

    </If>
)


export default IconButton


