import React from 'react'

class Filde extends React.Component {
    constructor(props){
        super(props)

        this.state = {value : props.label }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({value : event.target.value})
    }
    

    render(){
        return (
         <div>
            <label>{this.state.value}</label><br/>
            <input onChange={this.handleChange} value={this.state.value}></input>
         </div>
        )
    }
}

export default Filde