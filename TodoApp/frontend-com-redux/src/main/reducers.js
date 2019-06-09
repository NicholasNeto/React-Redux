import { combineReducers } from 'redux'


const rootReducers = combineReducers({
    todo: () => ({
        description: "Ler livros",
        list: [{
            _id: 1,
            description: "Pagar cartão de credito",
            done: true
        }, {
            _id: 2,
            description: "Pintar a Caixa",
            done: false
        }, {
            _id: 3,
            description: "Fazer uma carta",
            done: true
        }]
    })
})


export default rootReducers
