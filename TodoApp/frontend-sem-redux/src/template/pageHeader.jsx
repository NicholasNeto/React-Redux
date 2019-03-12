import React from 'react'

const PageHeader = (props) => (
    <header>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)

export default PageHeader