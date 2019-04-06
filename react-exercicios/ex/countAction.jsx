

export function inc(){
    return {type: "INC"}
}


export function dec(){
    return {type: "DEC"}
}


export function setpChange(event) {
    return {
        type: "SETP_CHANGE",
        payload: event.target.value
    }
}