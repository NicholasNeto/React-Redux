    const INITIAL_STATE = {
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
    }


    export default (state = INITIAL_STATE, action ) => {
        switch(action.type){
            case "DESCRIPTION_CHANGED":
                return { ...state, description: action.payload}
            default:
                return state

        }

    }


    
