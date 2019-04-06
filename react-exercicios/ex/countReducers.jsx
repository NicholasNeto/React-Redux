const INICIAL_STATE = {step: 1 , number: 0}


export default function(state = INICIAL_STATE, action ){
    switch(action.type) {
        case 'INC':
          return {...state,  numero: state.number +  state.step}
        case "DEC":
            return {...state,  numero: state.number - state.step}
        case "SETP_CHANGE":
            return {...state, step: action.payload }
        default:
          return state
      }
}

