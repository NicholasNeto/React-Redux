import React, { Component } from 'react'
import { bindActionCreators} from 'redux'

import Grid  from '../template/grid'
import IconButton from '../template/iconButton'

import { connect} from 'react-redux'
import { add,  changeDescripition, search } from './todoActions'


class TodoForm extends React.Component {
    constructor(props){
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        const { add, search, description} = this.props

        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        } else if(e.key === 'Escape'){
            this.props.handleClear()
        }
    }

    render(){
        const { add, search, description } = this.props


        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description'
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescripition}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton  style='primary' icon='plus' onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search' onClick={() => search() }></IconButton>
                    <IconButton  style='default' icon='close' onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispach => bindActionCreators({changeDescripition, search, add}, dispach )
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)