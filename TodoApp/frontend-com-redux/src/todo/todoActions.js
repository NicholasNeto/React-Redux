export const changeDescripition = event => ({
    type: 'DESCRIPTION_CHANGED', 
    payload: event.target.value
})