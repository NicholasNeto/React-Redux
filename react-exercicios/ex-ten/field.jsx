import React from 'react'
import { connect } from 'react-redux'
import {changeValue  } from "./fieldActions";
import { bindActionCreators } from 'redux';


class Field extends React.Component {
    
    render(){
        return (
         <div>
            <label>{this.props.value}</label><br/>
            <input onChange={this.props.changeValue} value={this.props.value}></input>
         </div>
        )
    }
}

function mapStateToProps(state){
    return { 
        value: state.field.value
    }
}

function mapDispatchToPros(dispatch){
    return bindActionCreators({changeValue}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToPros)(Field)