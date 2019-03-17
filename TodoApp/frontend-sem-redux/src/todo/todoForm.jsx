import React from 'react'


const TodoForm = () => (
    <div>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'></input>
        </div>

        <div className='col-xs-12 col-sm-3 col-md-2'>
            <button>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    </div>
)

export default TodoForm