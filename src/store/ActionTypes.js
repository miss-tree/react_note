export const ADD_NUMBER = 'addNumber' //定义常量要大写，便于辨认   
export const DEL_NUMBER = 'delNumber'
export const CHANGE_VAL = 'changeVal'

export const addAction = (value) => ({
    type: ADD_NUMBER,
    value,
})
export const delAction = (index) => ({
    type: DEL_NUMBER,
    index,
})
export const changeAction = () => ({
    type: CHANGE_VAL,
})